const SPREADSHEET_ID = '13m25pLXF-Gg98XuIbQSjnEPOfnx6R4F7bdeRHAdy-og';

function getDb_() {
  return SpreadsheetApp.openById(SPREADSHEET_ID);
}

function initSpreadsheet() {
  const ss = getDb_();
  const schema = {
    'HeroBanner': ['gambar', 'urutan'],
    'Artikel': ['judul', 'kategori', 'tanggal', 'ringkasan', 'konten', 'gambar', 'penulis', 'views', 'suka'],
    'Kegiatan': ['judul', 'tanggal', 'kategori', 'jam', 'lokasi', 'deskripsi', 'foto'],
    'KalenderAkademik': ['tahun_ajaran', 'semester', 'kegiatan', 'tanggal_mulai', 'tanggal_selesai', 'kategori', 'keterangan'],
    'JadwalPelajaran': ['kelas', 'hari', 'jam_ke', 'waktu', 'mapel', 'guru', 'ruang'],
    'JadwalUjian': ['jenis_ujian', 'kelas', 'tanggal', 'jam', 'mapel', 'ruang', 'pengawas'],
    'DokumenAkademik': ['jenis', 'judul', 'tahun_ajaran', 'kelas', 'file'],
    'Sejarah': ['tahun', 'judul', 'isi', 'foto'],
    'Donasi': ['nama_donatur', 'jumlah', 'tanggal', 'keterangan'],
    'RekeningDonasi': ['bank', 'nomor_rekening', 'atas_nama', 'keterangan'],
    'Guru': ['nama', 'jabatan', 'mapel', 'nip', 'foto'],
    'Program': ['nama_program', 'deskripsi', 'icon', 'foto'],
    'Ekstrakurikuler': ['nama_ekskul', 'deskripsi', 'pembina', 'jadwal', 'foto'],
    'Prestasi': ['nama_prestasi', 'nama_siswa', 'tingkat', 'tahun', 'keterangan', 'foto'],
    'Alumni': ['nama', 'angkatan', 'melanjutkan', 'testimoni', 'foto'],
    'Fasilitas': ['nama_fasilitas', 'deskripsi', 'foto'],
    'Galeri': ['judul', 'kategori', 'tanggal', 'gambar'],
    'GaleriVideo': ['judul', 'deskripsi', 'tanggal', 'url_video'],
    'VirtualTour360': ['judul', 'gambar', 'deskripsi', 'urutan'],
    'LiveStreaming': ['judul', 'url_video', 'status', 'tanggal', 'deskripsi'],
    'Statistik': ['label', 'jumlah'],
    'Menu': ['nama_menu', 'link', 'deskripsi', 'urutan', 'tampil'],
    'Karya': ['judul_karya', 'jenis_karya', 'nama_pembuat', 'peran', 'kelas', 'deskripsi', 'isi_karya', 'file_url', 'link_youtube'],
    'Profil': ['section', 'isi'],
    'Pengaturan': ['key', 'value'],
    'Admin': ['username', 'password', 'nama', 'token', 'token_exp']
  };

  for (let name in schema) {
    let sheet = ss.getSheetByName(name);
    if (!sheet) {
      sheet = ss.insertSheet(name);
    }
    const headers = schema[name];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  }

  // Isi default admin jika kosong
  const adminSheet = ss.getSheetByName('Admin');
  if (adminSheet.getLastRow() <= 1) {
    adminSheet.appendRow(['admin', 'admin123', 'Administrator', '', '']);
  }

  // Isi default pengaturan jika kosong
  const cfgSheet = ss.getSheetByName('Pengaturan');
  if (cfgSheet.getLastRow() <= 1) {
    const defaultCfg = [
      ['nama_sekolah', 'Sekolah Digital'],
      ['alamat', 'Jl. Pendidikan No. 1'],
      ['telepon', '021-1234567'],
      ['whatsapp', '08123456789'],
      ['email', 'info@sekolah.sch.id']
    ];
    cfgSheet.getRange(2, 1, defaultCfg.length, 2).setValues(defaultCfg);
  }

  return 'Inisialisasi Spreadsheet Berhasil!';
}

function doGet(e) {
  try {
    const fn = (e && e.parameter && e.parameter.fn) || 'getFullData';
    let args = [];
    if (e && e.parameter && e.parameter.args) {
      try { args = JSON.parse(e.parameter.args); } catch (err) {}
    }

    let hasil;
    if (fn === 'getFullData') {
      hasil = getFullData();
    } else if (fn === 'tambahViewArtikel') {
      hasil = tambahViewArtikel(args[0]);
    } else if (fn === 'updateSuka') {
      hasil = updateSuka(args[0], args[1], args[2]);
    } else if (fn === 'ping') {
      hasil = { status: 'ok', time: new Date().toISOString() };
    } else {
      hasil = { status: 'unknown_function', fn: fn };
    }

    return ContentService.createTextOutput(JSON.stringify({ __hasil: hasil }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ __error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    let body = {};
    if (e && e.postData && e.postData.contents) {
      body = JSON.parse(e.postData.contents);
    }
    const fn = body.fn;
    const args = body.args || [];
    let hasil;

    if (fn === 'loginAdmin') {
      hasil = loginAdmin(args[0], args[1]);
    } else if (fn === 'cekSesiAdmin') {
      hasil = cekSesiAdmin(args[0]);
    } else if (fn === 'logoutAdmin') {
      hasil = logoutAdmin(args[0]);
    } else if (fn === 'saveData') {
      hasil = saveData(args[0], args[1], args[2], args[3]);
    } else if (fn === 'deleteData') {
      hasil = deleteData(args[0], args[1], args[2]);
    } else if (fn === 'uploadFileToDrive') {
      hasil = uploadFileToDrive(args[0], args[1], args[2], args[3]);
    } else if (fn === 'getFullData') {
      hasil = getFullData();
    } else {
      throw new Error('Fungsi ' + fn + ' tidak dikenali.');
    }

    return ContentService.createTextOutput(JSON.stringify({ __hasil: hasil }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ __error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getFullData() {
  const ss = getDb_();
  const sheets = ss.getSheets();
  const db = {};

  sheets.forEach(sheet => {
    const nama = sheet.getName();
    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) {
      db[nama.toLowerCase()] = [];
      return;
    }
    const headers = data[0];
    const rows = [];
    for (let i = 1; i < data.length; i++) {
      let obj = { _rowId: i + 1 };
      headers.forEach((h, colIdx) => {
        obj[h] = data[i][colIdx];
      });
      rows.push(obj);
    }
    db[nama.toLowerCase()] = rows;
  });

  return db;
}

function verifikasiToken_(token) {
  if (!token) throw new Error('Sesi tidak valid atau sudah berakhir. Masukkan sandi lagi.');
  const ss = getDb_();
  const sheet = ss.getSheetByName('Admin');
  if (!sheet) throw new Error('Sheet Admin belum dibuat.');
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][3] && data[i][3].toString() === token.toString()) {
      return true;
    }
  }
  throw new Error('Sesi tidak valid atau sudah berakhir. Masukkan sandi lagi.');
}

function loginAdmin(user, pass) {
  const ss = getDb_();
  const sheet = ss.getSheetByName('Admin');
  if (!sheet) return { sukses: false, pesan: 'Database admin belum diinisialisasi.' };
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (data[i][0] == user && data[i][1] == pass) {
      const token = Utilities.getUuid();
      sheet.getRange(i + 1, 4).setValue(token);
      sheet.getRange(i + 1, 5).setValue(new Date().getTime() + (7 * 24 * 3600 * 1000));
      return {
        sukses: true,
        token: token,
        nama: data[i][2] || 'Admin',
        pesan: 'Login berhasil.'
      };
    }
  }
  return { sukses: false, pesan: 'Username atau password salah.' };
}

function cekSesiAdmin(token) {
  try {
    verifikasiToken_(token);
    return { valid: true };
  } catch (e) {
    return { valid: false };
  }
}

function logoutAdmin(token) {
  const ss = getDb_();
  const sheet = ss.getSheetByName('Admin');
  if (!sheet) return { sukses: true };
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][3] == token) {
      sheet.getRange(i + 1, 4).setValue('');
    }
  }
  return { sukses: true };
}

function saveData(sheetName, dataObj, rowId, token) {
  verifikasiToken_(token);
  const ss = getDb_();
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet) throw new Error('Sheet ' + sheetName + ' tidak ditemukan.');

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const rowData = headers.map(h => dataObj[h] !== undefined ? dataObj[h] : '');

  if (rowId && parseInt(rowId) > 1) {
    sheet.getRange(parseInt(rowId), 1, 1, rowData.length).setValues([rowData]);
    dataObj._rowId = parseInt(rowId);
  } else {
    sheet.appendRow(rowData);
    dataObj._rowId = sheet.getLastRow();
  }
  return dataObj;
}

function deleteData(sheetName, rowId, token) {
  verifikasiToken_(token);
  const ss = getDb_();
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet) throw new Error('Sheet ' + sheetName + ' tidak ditemukan.');
  if (rowId && parseInt(rowId) > 1) {
    sheet.deleteRow(parseInt(rowId));
  }
  return { sukses: true };
}

function uploadFileToDrive(base64Data, fileName, mimeType, token) {
  verifikasiToken_(token);
  const folderName = 'WebSekolah_Uploads';
  const folders = DriveApp.getFoldersByName(folderName);
  let folder;
  if (folders.hasNext()) {
    folder = folders.next();
  } else {
    folder = DriveApp.createFolder(folderName);
    folder.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  }

  const decoded = Utilities.base64Decode(base64Data);
  const blob = Utilities.newBlob(decoded, mimeType, fileName || 'upload.jpg');
  const file = folder.createFile(blob);
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

  return 'https://lh3.googleusercontent.com/d/' + file.getId();
}

function tambahViewArtikel(rowId) {
  try {
    const ss = getDb_();
    const sheet = ss.getSheetByName('Artikel');
    if (!sheet) return 0;
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const viewCol = headers.indexOf('views') + 1;
    if (viewCol <= 0) return 0;
    const cell = sheet.getRange(parseInt(rowId), viewCol);
    const val = parseInt(cell.getValue() || 0) + 1;
    cell.setValue(val);
    return val;
  } catch (e) {
    return 0;
  }
}

function updateSuka(sheetName, rowId, type) {
  try {
    const ss = getDb_();
    const sheet = ss.getSheetByName(sheetName);
    if (!sheet) return 0;
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const sukaCol = headers.indexOf('suka') + 1;
    if (sukaCol <= 0) return 0;
    const cell = sheet.getRange(parseInt(rowId), sukaCol);
    let val = parseInt(cell.getValue() || 0);
    if (type === 'like') val += 1;
    else if (type === 'unlike' && val > 0) val -= 1;
    cell.setValue(val);
    return val;
  } catch (e) {
    return 0;
  }
}
