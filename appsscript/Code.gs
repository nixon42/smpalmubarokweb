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
      ['nama_sekolah', "SMPI Yambu'ul Qur'an"],
      ['alamat', 'Jl. Agung Ds. Jarak RT 04/ RW 02, Desa Jarak, Kecamatan Plosoklaten, Kabupaten Kediri, Jawa Timur'],
      ['telepon', '0815-1577-7911'],
      ['whatsapp', '0815-1577-7911'],
      ['wa_number', '6281515777911'],
      ['email', 'smpiyaqu@gmail.com'],
      ['instagram', 'https://www.instagram.com/smpiyaqu_kediri/'],
      ['npsn', '70003325'],
      ['yayasan', "Yayasan Yambu'ul Qur'an"],
      ['status', 'Swasta (Akreditasi B)'],
      ['sk_operasional', '414-44/2053/418.20/2023'],
      ['splash_judul', "SMPI YAMBU'UL QUR'AN"],
      ['splash_tagline', "Mencetak Generasi Qur'ani & Berakhlak Mulia"]
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
    } else if (fn === 'tanyaChatbotSekolah') {
      hasil = tanyaChatbotSekolah(args[0], args[1]);
    } else if (fn === 'getYoutubeData') {
      hasil = getYoutubeData();
    } else if (fn === 'getLiveStatus') {
      hasil = getLiveStatus();
    } else if (fn === 'tambahViewArtikel') {
      hasil = tambahViewArtikel(args[0]);
    } else if (fn === 'updateSuka') {
      hasil = updateSuka(args[0], args[1], args[2]);
    } else if (fn === 'tambahViewKarya') {
      hasil = tambahViewKarya(args[0]);
    } else if (fn === 'updateSukaKarya') {
      hasil = updateSukaKarya(args[0], args[1]);
    } else if (fn === 'cekSandiKarya') {
      hasil = cekSandiKarya(args[0]);
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
    } else if (fn === 'tanyaChatbotSekolah') {
      hasil = tanyaChatbotSekolah(args[0], args[1]);
    } else if (fn === 'cekSandiKarya') {
      hasil = cekSandiKarya(args[0]);
    } else if (fn === 'cekKodeAkses') {
      hasil = cekKodeAkses(args[0]);
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

function tambahViewKarya(rowId) {
  try {
    const ss = getDb_();
    const sheet = ss.getSheetByName('Karya');
    if (!sheet) return 0;
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    let viewCol = headers.indexOf('views') + 1;
    if (viewCol <= 0) {
      viewCol = headers.length + 1;
      sheet.getRange(1, viewCol).setValue('views');
    }
    const cell = sheet.getRange(parseInt(rowId), viewCol);
    const val = parseInt(cell.getValue() || 0) + 1;
    cell.setValue(val);
    return val;
  } catch (e) {
    return 0;
  }
}

function updateSukaKarya(rowId, type) {
  try {
    const ss = getDb_();
    const sheet = ss.getSheetByName('Karya');
    if (!sheet) return 0;
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    let sukaCol = headers.indexOf('suka') + 1;
    if (sukaCol <= 0) {
      sukaCol = headers.length + 1;
      sheet.getRange(1, sukaCol).setValue('suka');
    }
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

function cekSandiKarya(sandi) {
  return { valid: true };
}

function cekKodeAkses(kode) {
  return { valid: true };
}

function getYoutubeData() {
  return { status: 'ok', items: [] };
}

function getLiveStatus() {
  return { live: false, url: '' };
}

// ============================================================
// CHATBOT SEKOLAH: SMPI YAMBU'UL QUR'AN
// ============================================================
function tanyaChatbotSekolah(pertanyaan, history) {
  if (!pertanyaan || !pertanyaan.trim()) {
    return { jawaban: "Silakan ajukan pertanyaan seputar SMPI Yambu'ul Qur'an." };
  }
  const q = pertanyaan.toLowerCase().trim();

  // Data Profil Sekolah
  const profil = {
    nama: "SMPI Yambu'ul Qur'an",
    npsn: "70003325",
    alamat: "Jl. Agung Ds. Jarak RT 04/ RW 02, Desa Jarak, Kecamatan Plosoklaten, Kabupaten Kediri, Jawa Timur",
    yayasan: "Yayasan Yambu'ul Qur'an",
    akreditasi: "Akreditasi B (Swasta)",
    sk: "414-44/2053/418.20/2023 (tanggal 19 Januari 2023)",
    wa: "0815-1577-7911",
    email: "smpiyaqu@gmail.com",
    ig: "@smpiyaqu_kediri"
  };

  // 1. Coba panggil Groq AI jika ada API Key di sheet Pengaturan
  try {
    const ss = getDb_();
    const cfgSheet = ss.getSheetByName('Pengaturan');
    if (cfgSheet) {
      const cfgData = cfgSheet.getDataRange().getValues();
      let groqKey = '';
      for (let i = 1; i < cfgData.length; i++) {
        if (cfgData[i][0] === 'groq_api_key' && cfgData[i][1]) {
          groqKey = cfgData[i][1].toString().trim();
          break;
        }
      }
      if (groqKey) {
        const sysPrompt = "Anda adalah Asisten AI resmi SMPI Yambu'ul Qur'an Plosoklaten Kediri. Jawab dengan ramah, santun, Islami, dan ringkas dalam Bahasa Indonesia.\n" +
          "Informasi Sekolah:\n" +
          "- Nama: SMPI Yambu'ul Qur'an\n" +
          "- NPSN: 70003325\n" +
          "- Alamat: Jl. Agung Ds. Jarak RT 04/ RW 02, Desa Jarak, Kec. Plosoklaten, Kab. Kediri, Jawa Timur\n" +
          "- Yayasan: Yayasan Yambu'ul Qur'an\n" +
          "- Status & Akreditasi: Swasta (Akreditasi B)\n" +
          "- SK Operasional: 414-44/2053/418.20/2023\n" +
          "- Kontak / WhatsApp: 0815-1577-7911\n" +
          "- Email: smpiyaqu@gmail.com\n" +
          "- Instagram: @smpiyaqu_kediri\n" +
          "Jika ada pertanyaan di luar sekolah, arahkan dengan sopan kembali ke informasi sekolah.";
        
        const messages = [{ role: "system", content: sysPrompt }];
        if (Array.isArray(history)) {
          history.slice(-4).forEach(h => {
            if (h.role === 'user' || h.role === 'bot') {
              messages.push({ role: h.role === 'bot' ? 'assistant' : 'user', content: h.text || '' });
            }
          });
        }
        messages.push({ role: "user", content: pertanyaan });

        const resp = UrlFetchApp.fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "post",
          headers: {
            "Authorization": "Bearer " + groqKey,
            "Content-Type": "application/json"
          },
          payload: JSON.stringify({
            model: "llama-3.1-8b-instant",
            messages: messages,
            max_tokens: 400,
            temperature: 0.6
          }),
          muteHttpExceptions: true
        });
        if (resp.getResponseCode() === 200) {
          const resJson = JSON.parse(resp.getContentText());
          if (resJson.choices && resJson.choices[0] && resJson.choices[0].message) {
            return { jawaban: resJson.choices[0].message.content };
          }
        }
      }
    }
  } catch (errAI) {
    // Abaikan jika Groq error, lanjut ke knowledge base bawaan
  }

  // 2. Knowledge Base Cerdas Bawaan SMPI Yambu'ul Qur'an
  if (q.includes('profil') || q.includes('tentang') || q.includes('sejarah') || q.includes('visi') || q.includes('misi')) {
    return {
      jawaban: "🏫 *Profil SMPI Yambu'ul Qur'an*\n\n" +
               "SMPI Yambu'ul Qur'an adalah sekolah menengah pertama swasta di bawah naungan " + profil.yayasan + " dengan status " + profil.akreditasi + ".\n\n" +
               "📌 NPSN: " + profil.npsn + "\n" +
               "📜 No. SK Operasional: " + profil.sk + "\n" +
               "📍 Alamat: " + profil.alamat + "\n\n" +
               "Visi: Terwujudnya generasi yang beriman, bertakwa, berakhlak mulia, berprestasi, dan berwawasan Al-Qur'an."
    };
  }

  if (q.includes('npsn') || q.includes('sk') || q.includes('akreditasi') || q.includes('yayasan') || q.includes('legalitas') || q.includes('status')) {
    return {
      jawaban: "📋 *Legalitas & Identitas Sekolah*\n\n" +
               "• Nama Sekolah: " + profil.nama + "\n" +
               "• NPSN: " + profil.npsn + "\n" +
               "• Yayasan / Naungan: " + profil.yayasan + "\n" +
               "• Status & Akreditasi: " + profil.akreditasi + "\n" +
               "• No. SK Operasional: " + profil.sk
    };
  }

  if (q.includes('daftar') || q.includes('ppdb') || q.includes('biaya') || q.includes('syarat') || q.includes('masuk') || q.includes('spmb')) {
    return {
      jawaban: "📝 *Informasi PPDB & Pendaftaran SMPI Yambu'ul Qur'an*\n\n" +
               "Pendaftaran siswa/santri baru SMPI Yambu'ul Qur'an telah dibuka!\n\n" +
               "Syarat Umum Pendaftaran:\n" +
               "1. Mengisi formulir pendaftaran\n" +
               "2. Fotokopi Ijazah / SKL SD/MI sederajat\n" +
               "3. Fotokopi Kartu Keluarga (KK) & Akta Kelahiran\n" +
               "4. Pas foto berwarna terbaru\n\n" +
               "Untuk konsultasi pendaftaran, jadwal tes, serta info beasiswa & biaya, silakan hubungi panitia PPDB melalui WhatsApp: " + profil.wa + "."
    };
  }

  if (q.includes('kontak') || q.includes('lokasi') || q.includes('alamat') || q.includes('nomor') || q.includes('wa') || q.includes('telepon') || q.includes('email') || q.includes('instagram') || q.includes('sosmed')) {
    return {
      jawaban: "📞 *Kontak & Lokasi SMPI Yambu'ul Qur'an*\n\n" +
               "📍 Alamat: " + profil.alamat + "\n" +
               "📱 WhatsApp / Telp: " + profil.wa + "\n" +
               "✉️ Email: " + profil.email + "\n" +
               "📸 Instagram: " + profil.ig + " (https://www.instagram.com/smpiyaqu_kediri/)\n\n" +
               "Silakan hubungi kami untuk informasi lebih lanjut!"
    };
  }

  if (q.includes('program') || q.includes('unggulan') || q.includes('kurikulum') || q.includes('tahfidz') || q.includes('quran')) {
    return {
      jawaban: "🌟 *Program Unggulan SMPI Yambu'ul Qur'an*\n\n" +
               "1. **Tahfidz & Tahsin Al-Qur'an**: Bimbingan hafalan dan tajwid Al-Qur'an intensif oleh asatidz berkompeten.\n" +
               "2. **Pendidikan Karakter Islami**: Penanaman adab, sholat berjamaah, dan pembiasaan akhlakul karimah.\n" +
               "3. **Penguatan Akademik & Teknologi**: Pembelajaran kurikulum terintegrasi dengan sarana digital.\n" +
               "4. **Pengembangan Bahasa**: Pembiasaan kosakata dan muhadharah bahasa Arab dan Inggris."
    };
  }

  if (q.includes('ekskul') || q.includes('ekstrakurikuler') || q.includes('kegiatan')) {
    return {
      jawaban: "⚽ *Ekstrakurikuler SMPI Yambu'ul Qur'an*\n\n" +
               "Wadah minat dan bakat siswa mencakup:\n" +
               "• Seni Hadrah / Banjari\n" +
               "• Kepramukaan\n" +
               "• Olahraga (Futsal, Bulutangkis, Tenis Meja)\n" +
               "• Kaligrafi Islam\n" +
               "• Muhadharah (Khitobah / Pidato 3 Bahasa)\n" +
               "• Bimbingan Literasi & Komputer"
    };
  }

  if (q.includes('prestasi') || q.includes('juara') || q.includes('lomba')) {
    return {
      jawaban: "🏆 *Prestasi Sekolah*\n\n" +
               "Siswa-siswi SMPI Yambu'ul Qur'an aktif mengukir prestasi dalam berbagai kompetisi keagamaan (MTQ/MHQ), seni Islami, dan akademik baik di tingkat kecamatan Plosoklaten maupun Kabupaten Kediri."
    };
  }

  if (q.includes('halo') || q.includes('assalamu') || q.includes('hai') || q.includes('selamat') || q.includes('pagi') || q.includes('siang') || q.includes('sore') || q.includes('malam')) {
    return {
      jawaban: "Assalamu'alaikum Warahmatullahi Wabarakatuh! Selamat datang di Asisten Virtual SMPI Yambu'ul Qur'an. Ada yang bisa saya bantu seputar profil sekolah, program unggulan, info pendaftaran (PPDB), atau kontak sekolah?"
    };
  }

  return {
    jawaban: "Terima kasih atas pertanyaan Anda. Untuk informasi lebih mendalam mengenai hal tersebut, silakan menghubungi layanan informasi SMPI Yambu'ul Qur'an langsung melalui WhatsApp panitia di " + profil.wa + " atau email " + profil.email + ".\n\nAnda juga dapat memilih topik cepat: Profil Sekolah, Program Unggulan, PPDB, Ekstrakurikuler, atau Kontak & Lokasi."
  };
}
