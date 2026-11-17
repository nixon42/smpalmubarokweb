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

  const adminSheet = ss.getSheetByName('Admin');
  if (adminSheet.getLastRow() <= 1) {
    adminSheet.appendRow(['admin', 'admin123', 'Administrator', '', '']);
  }

  return 'Inisialisasi Spreadsheet Berhasil!';
}

function isiDemoData() {
  const ss = getDb_();
  initSpreadsheet();

  const dataDemo = {
    'HeroBanner': [
      ['https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1280&q=80', '1'],
      ['https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1280&q=80', '2'],
      ['https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1280&q=80', '3']
    ],
    'Artikel': [
      [
        "Penerimaan Peserta Didik Baru (PPDB) SMPI Yambu'ul Qur'an Tahun Ajaran 2026/2027 Resmi Dibuka",
        'PPDB',
        '2026-11-15',
        "SMPI Yambu'ul Qur'an Plosoklaten membuka pendaftaran peserta didik dan santri baru dengan kuota terbatas serta program beasiswa tahfidz Al-Qur'an.",
        "<p>Assalamu'alaikum Warahmatullahi Wabarakatuh.</p><p>Kabar gembira bagi para orang tua dan calon peserta didik yang mendambakan pendidikan berkualitas berbasis nilai-nilai Islam dan Al-Qur'an. <strong>SMPI Yambu'ul Qur'an</strong> secara resmi membuka Penerimaan Peserta Didik Baru (PPDB) untuk Tahun Ajaran 2026/2027.</p><h3>Program Unggulan:</h3><ul><li>Tahfidzul Qur'an Intensif bersanad</li><li>Pendidikan Karakter dan Adab Islami</li><li>Kelas Digital & Eksplorasi Sains</li><li>Pembiasaan Bahasa Arab dan Inggris</li></ul><p>Pendaftaran dapat dilakukan langsung di kampus SMPI Yambu'ul Qur'an atau via WhatsApp panitia di <strong>0815-1577-7911</strong>.</p>",
        'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
        'Panitia PPDB',
        248,
        37
      ],
      [
        "Khotmil Qur'an & Imtihan Tahfidz: 42 Santri Sukses Uji Publik Hafalan Al-Qur'an",
        'Prestasi',
        '2026-11-10',
        "Suasana khidmat dan penuh haru mewarnai gelaran Khotmil Qur'an dan Uji Publik Hafalan santri SMPI Yambu'ul Qur'an di hadapan para orang tua dan asatidz.",
        "<p>Sebanyak 42 santri SMPI Yambu'ul Qur'an sukses menuntaskan uji hafalan Al-Qur'an pada acara Khotmil Qur'an dan Imtihan Tahfidz di Masjid Jami' Yambu'ul Qur'an.</p><p>Uji publik ini menguji kelancaran (itqan), tajwid, makharijul huruf, dan fashahah hafalan Al-Qur'an secara acak oleh para penguji berkompeten dan wali santri. Semoga melahirkan generasi Qur'ani yang berakhlak mulia.</p>",
        'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
        'Humas Sekolah',
        315,
        52
      ],
      [
        "Santri SMPI Yaqu Raih Juara 1 MTQ dan Kaligrafi Tingkat Kabupaten Kediri",
        'Prestasi',
        '2026-11-05',
        "Prestasi membanggakan kembali ditorehkan santri SMPI Yambu'ul Qur'an pada ajang Pekan Seni dan Keterampilan Islam tingkat Kabupaten Kediri.",
        "<p>Delegasi SMPI Yambu'ul Qur'an berhasil membawa pulang trofi Juara 1 pada cabang Musabaqah Tilawatil Qur'an (MTQ) dan Juara 1 Seni Kaligrafi Islam Kontemporer.</p><p>Keberhasilan ini membuktikan komitmen sekolah dalam membina bakat seni dan spiritualitas generasi muda.</p>",
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
        'Tim Redaksi Yaqu',
        189,
        41
      ],
      [
        "Integrasi Kurikulum Merdeka dan Nilai Al-Qur'an di Era Digital",
        'Pendidikan',
        '2026-10-28',
        "Bagaimana SMPI Yambu'ul Qur'an memadukan penguasaan sains teknologi modern dengan pembentukan karakter akhlakul karimah.",
        "<p>Pendidikan di abad ke-21 menuntut keseimbangan antara kecerdasan intelektual, kemahiran digital, dan keteguhan spiritual. Di SMPI Yambu'ul Qur'an, proses pembelajaran dirancang untuk mengembangkan nalar kritis siswa tanpa meninggalkan adab Islami.</p>",
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
        'Ust. H. Ahmad Fauzi, Lc.',
        172,
        29
      ],
      [
        "Peringatan Hari Santri Nasional: Meneladani Semangat Juang Para Ulama",
        'Kegiatan',
        '2026-10-22',
        "Upacara peringatan Hari Santri Nasional di SMPI Yambu'ul Qur'an berlangsung khidmat diikuti seluruh santri, guru, dan pengurus yayasan.",
        "<p>Dengan mengenakan busana muslim dan sarung khas santri, seluruh keluarga besar SMPI Yambu'ul Qur'an menggelar apel akbar Hari Santri Nasional yang dimeriahkan lomba khitobah 3 bahasa dan hadrah.</p>",
        'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80',
        'OSIS SMPI Yaqu',
        210,
        48
      ],
      [
        "Kiat Praktis Menghafal Al-Qur'an dan Menjaga Hafalan bagi Pelajar Remaja",
        'Edukasi',
        '2026-10-15',
        "Tips efektif mengelola waktu antara target ziyadah hafalan Al-Qur'an harian dan kewajiban belajar pelajaran umum di sekolah.",
        "<p>Koordinator Tahfidz SMPI Yambu'ul Qur'an membagikan tips kunci: niat ikhlas, istiqomah muroja'ah bakda subuh, menjaga pandangan serta adab, dan menggunakan mushaf standar yang sama.</p>",
        'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
        'Ust. Muhammad Ilham, Al-Hafidz',
        340,
        65
      ]
    ],
    'Guru': [
      ["Ust. H. Ahmad Fauzi, Lc., M.Pd.", "Kepala Sekolah", "PAI & Ulumul Qur'an", "19820415 200801 1 008", "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"],
      ["Ustadzah Siti Nur Azizah, S.Pd.I., M.Pd.", "Waka Kurikulum", "Bahasa Arab", "19860920 201101 2 012", "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"],
      ["Ust. Muhammad Ilham, Al-Hafidz", "Koordinator Tahfidz", "Tahsin & Tahfidzul Qur'an", "-", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"],
      ["Bpk. Rian Hidayat, S.Pd.", "Waka Kesiswaan & Pembina Pramuka", "Ilmu Pengetahuan Alam (IPA)", "19900312 201503 1 005", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"],
      ["Ibu Dwi Rahayu, S.Si., M.Pd.", "Guru Senior", "Matematika", "19850118 200902 2 006", "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=400&q=80"],
      ["Ustadzah Fitria Handayani, S.Pd.", "Pembina Bahasa", "Bahasa Inggris", "19930704 201903 2 015", "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"],
      ["Ust. Zainul Muttaqin, S.Pd.I.", "Pembina Seni & Ekskul", "Seni Budaya & Kaligrafi", "-", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"],
      ["Bpk. Hendra Saputra, S.Kom.", "Kepala Lab Komputer", "Informatika", "-", "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400&q=80"]
    ],
    'Program': [
      ["Tahfidzul Qur'an Intensif (30 Juz)", "Bimbingan hafalan dan talaqqi Al-Qur'an bersanad setiap hari dengan target mutqin dan wisuda tahfidz berkala.", "fa-book-quran", "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"],
      ["Pendidikan Karakter & Adab Qur'ani", "Pembiasaan sholat fardhu berjamaah, sholat dhuha, tadarus Al-Qur'an, dan penanaman akhlakul karimah dalam keseharian santri.", "fa-heart", "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=600&q=80"],
      ["Bilingual Language Program", "Penguasaan komunikasi aktif Bahasa Arab dan Bahasa Inggris melalui muhadharah, yaumul lughah, dan mufrodat harian.", "fa-language", "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80"],
      ["Smart School & Digital Learning", "Integrasi kurikulum nasional dengan fasilitas laboratorium komputer multimedia, e-learning, dan literasi teknologi modern.", "fa-laptop-code", "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"]
    ],
    'Ekstrakurikuler': [
      ["Seni Hadrah & Banjari Al-Muhibbin", "Seni musik rebana Islami, pembacaan maulid Simtudduror dan sholawat nabi.", "Ust. Zainul Muttaqin", "Selasa & Kamis, 15.30 - 17.00 WIB", "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"],
      ["Pramuka Gugus Depan Yaqu", "Pendidikan kepanduan melatih kedisiplinan, kemandirian, dan kepemimpinan generasi muda muslim.", "Kak Rian Hidayat, S.Pd.", "Jumat, 14.30 - 16.30 WIB", "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=600&q=80"],
      ["Futsal & Olahraga Prestasi", "Latihan teknik sepak bola mini, penguatan fisik, dan kebugaran santri.", "Coach Wahyu Pratama", "Sabtu, 07.00 - 09.00 WIB", "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"],
      ["Seni Kaligrafi Islam Kontemporer", "Pembelajaran seni khat naskhi, tsuluts, diwani, dan lukis kaligrafi kanvas.", "Ust. Mahfudz Al-Khattat", "Rabu, 15.30 - 17.00 WIB", "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80"],
      ["Muhadharah 3 Bahasa", "Latihan pidato dan retorika dakwah dalam Bahasa Indonesia, Arab, dan Inggris.", "Ustadzah Fitria, S.Pd.", "Ahad, 19.30 - 21.00 WIB", "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80"],
      ["Klub Komputer & IT Terapan", "Belajar dasar desain grafis, pengetikan cepat, dan eksplorasi teknologi digital.", "Bpk. Hendra Saputra, S.Kom.", "Senin, 15.30 - 17.00 WIB", "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"]
    ],
    'Prestasi': [
      ["Juara 1 Musabaqah Hifdzil Qur'an (MHQ) 5 Juz", "Muhammad Ridwan (Kelas 8)", "Kabupaten Kediri", "2026", "Pekan Olahraga dan Seni Islami Kabupaten Kediri", "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"],
      ["Juara 2 Lomba Pidato Bahasa Arab Pelajar", "Aisyah Syifa Ramadhani (Kelas 9)", "Provinsi Jawa Timur", "2026", "Festival Bahasa Arab Se-Jawa Timur", "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"],
      ["Juara 1 Festival Seni Hadrah Pelajar", "Grup Hadrah Syauqul Qolbi Yaqu", "Karesidenan Kediri", "2025", "Festival Maulid Pelajar Karesidenan Kediri", "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"],
      ["Medali Perak Olimpiade Sains & PAI Nasional", "Fatimah Az-Zahra (Kelas 8)", "Nasional", "2025", "Olimpiade Sains PAI Pelajar Menengah Tingkat Nasional", "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80"]
    ],
    'Fasilitas': [
      ["Masjid Jami' Yambu'ul Qur'an", "Masjid megah pusat ibadah sholat 5 waktu berjamaah, kajian kitab salaf, dan halaqah tahfidz yang nyaman.", "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=600&q=80"],
      ["Gedung Asrama Santri (Boarding)", "Hunian santri yang bersih, tertata rapi, berfasilitas kasur & lemari pribadi, serta dibimbing musyrif 24 jam.", "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80"],
      ["Laboratorium Komputer Multimedia", "Laboratorium ber-AC dengan 32 unit komputer modern dan jaringan internet berkecepatan tinggi.", "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"],
      ["Perpustakaan & Pojok Literasi Qur'an", "Koleksi ribuan buku pelajaran, ensiklopedia Islam, kitab tafsir, dan ruang baca santai.", "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80"],
      ["Lapangan Olahraga Serbaguna", "Lapangan futsal, voli, dan bulutangkis beralas cor halus untuk menjaga kebugaran dan sportivitas santri.", "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=600&q=80"],
      ["Ruang Kelas Modern & Ber-AC", "Ruang belajar representatif dilengkapi proyektor LCD, papan tulis ganda, dan ventilasi udara yang sejuk.", "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80"]
    ],
    'Statistik': [
      ['Santri & Siswa Aktif', '348'],
      ['Guru & Asatidz', '28'],
      ['Santri Tahfidz 5-30 Juz', '115'],
      ['Trofi & Prestasi Juara', '42']
    ],
    'Alumni': [
      ["Muhammad Faiz Al-Farisi", "2024", "MA PK MAN 1 Yogyakarta", "Fondasi Al-Qur'an dan kedisiplinan di SMPI Yambu'ul Qur'an membuat saya sangat siap bersaing dan mandiri di madrasah unggulan.", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"],
      ["Nabila Salma Nur Izzati", "2024", "Pondok Modern Gontor Putri", "Alhamdulillah, bimbingan ustadz-ustadzah di SMPI Yaqu sangat berharga, baik hafalan Al-Qur'an maupun penanaman akhlak harian.", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"],
      ["Ahmad Zaki Robbani", "2025", "SMA Taruna Nusantara", "Di SMPI Yaqu kami dididik untuk berprestasi akademik sekaligus menjaga sholat berjamaah dan Al-Qur'an. Bekal luar biasa!", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"]
    ],
    'Kegiatan': [
      ["Ujian Sumatif Akhir Semester (SAS) Ganjil", "2026-12-01", "Akademik", "07.30 - 12.00 WIB", "Gedung Kelas SMPI Yaqu", "Evaluasi pembelajaran semester ganjil berbasis Computer Based Test (CBT) dan tertulis.", "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80"],
      ["Munaqosyah & Uji Publik Tahfidz Al-Qur'an Ke-4", "2026-12-18", "Keagamaan", "08.00 - 15.00 WIB", "Masjid Jami' Yambu'ul Qur'an", "Ujian kelayakan hafalan 5 Juz, 10 Juz, dan 30 Juz bagi santri tahfidz intensif.", "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"],
      ["Penerimaan Rapor & Wisuda Tahfidz Semester Ganjil", "2026-12-23", "Akademik", "08.00 - 11.30 WIB", "Aula Pertemuan Sekolah", "Penyerahan laporan hasil belajar siswa semester ganjil kepada orang tua / wali santri.", "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"],
      ["Kemah Bhakti Santri & Pelantikan Penggalang", "2027-01-15", "Kesiswaan", "07.00 WIB - Selesai", "Bumi Perkemahan Kediri", "Kegiatan pembinaan kemandirian dan kepanduan Pramuka Gugus Depan SMPI Yambu'ul Qur'an.", "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=600&q=80"]
    ],
    'RekeningDonasi': [
      ["Bank Syariah Indonesia (BSI)", "7188-2938-11", "Yayasan Yambu'ul Qur'an Kediri", "Infaq & Donasi Pengembangan Sarana Pendidikan SMPI Yaqu"],
      ["Bank Jatim Syariah", "6102-4889-01", "Yayasan Yambu'ul Qur'an", "Wakaf Mushaf Al-Qur'an & Beasiswa Santri Yatim/Dhuafa"]
    ],
    'Galeri': [
      ["Halaqah Tahfidz Al-Qur'an Santri Pagi Hari", "Tahfidz", "2026-11-12", "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"],
      ["Praktikum Sains di Laboratorium Terpadu", "Akademik", "2026-11-08", "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"],
      ["Sholat Berjamaah di Masjid Jami' Yambu'ul Qur'an", "Ibadah", "2026-11-04", "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=600&q=80"],
      ["Latihan Rutin Ekstrakurikuler Hadrah Banjari", "Ekstrakurikuler", "2026-10-30", "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"],
      ["Upacara Bendera dan Pembinaan Karakter Santri", "Kesiswaan", "2026-10-25", "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"],
      ["Kompetisi Futsal Antar Kelas (Classmeeting)", "Olahraga", "2026-10-18", "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"]
    ],
    'Karya': [
      [
        "Lantunan Cahaya Kalam Ilahi",
        "Puisi",
        "Ahmad Raihan",
        "Siswa",
        "Kelas 8A",
        "Puisi ungkapan kecintaan santri kepada Al-Qur'an dan bimbingan asatidz.",
        "Di setiap hening fajar menyingsing,\nKalam-Mu mengalun lembut menentramkan jiwa.\nSetiap ayat adalah lentera,\nPenuntun langkah di belantara dunia.\n\nYambu'ul Qur'an, sumber mata air suci,\nTempat kami menyemai mimpi,\nMenjadi generasi yang berbakti,\nKuat iman, luhur pekerti.",
        "",
        ""
      ],
      [
        "Khat Tsuluts Surat Al-Fatihah",
        "Gambar",
        "Fathur Rahman",
        "Siswa",
        "Kelas 9B",
        "Karya kaligrafi tinta emas di atas kanvas hitam karya santri ekstra kaligrafi.",
        "",
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
        ""
      ]
    ],
    'Profil': [
      ["sambutan", "Assalamu'alaikum Warahmatullahi Wabarakatuh. Selamat datang di website resmi SMPI Yambu'ul Qur'an Plosoklaten Kediri. Kami berkomitmen menyelenggarakan pendidikan berkualitas yang memadukan kurikulum nasional dan nilai-nilai luhur Al-Qur'an guna melahirkan generasi yang unggul dalam ilmu, kuat dalam iman, dan berakhlakul karimah."],
      ["visi", "Terwujudnya generasi yang beriman, bertakwa, berakhlak mulia, berprestasi, berwawasan Al-Qur'an, dan berdaya saing global."],
      ["misi", "1. Menyelenggarakan pembelajaran berkualitas berbasis nilai-nilai Islam dan Al-Qur'an.\n2. Membina karakter dan akhlakul karimah siswa dalam kehidupan sehari-hari.\n3. Mengembangkan potensi akademik, minat, dan bakat peserta didik secara optimal.\n4. Membangun lingkungan sekolah yang asri, disiplin, dan berwawasan teknologi."],
      ["sejarah", "SMPI Yambu'ul Qur'an berdiri di bawah naungan Yayasan Yambu'ul Qur'an di Desa Jarak, Kecamatan Plosoklaten, Kabupaten Kediri. Berangkat dari tekad mencetak generasi penghafal Al-Qur'an yang cerdas dan berkarakter, sekolah ini terus berkembang menjadi lembaga pendidikan Islam terpercaya dengan akreditasi B dan legalitas resmi SK Operasional 414-44/2053/418.20/2023."],
      ["npsn", "70003325"],
      ["akreditasi", "B"],
      ["yayasan", "Yayasan Yambu'ul Qur'an"],
      ["sk", "414-44/2053/418.20/2023"]
    ],
    'Pengaturan': [
      ["nama_sekolah", "SMPI Yambu'ul Qur'an"],
      ["alamat", "Jl. Agung Ds. Jarak RT 04/ RW 02, Desa Jarak, Kecamatan Plosoklaten, Kabupaten Kediri, Jawa Timur"],
      ["telepon", "0815-1577-7911"],
      ["wa_number", "6281515777911"],
      ["whatsapp", "0815-1577-7911"],
      ["email", "smpiyaqu@gmail.com"],
      ["instagram", "https://www.instagram.com/smpiyaqu_kediri/"],
      ["npsn", "70003325"],
      ["yayasan", "Yayasan Yambu'ul Qur'an"],
      ["status", "Swasta (Akreditasi B)"],
      ["sk_operasional", "414-44/2053/418.20/2023"],
      ["logo", "https://nixon42.github.io/smpalmubarokweb/logo.png"],
      ["splash_logo", "https://nixon42.github.io/smpalmubarokweb/splash-logo.webp"],
      ["splash_judul", "SMPI YAMBU'UL QUR'AN"],
      ["splash_tagline", "Mencetak Generasi Qur'ani & Berakhlak Mulia"]
    ]
  };

  for (let sName in dataDemo) {
    let sheet = ss.getSheetByName(sName);
    if (!sheet) sheet = ss.insertSheet(sName);
    const lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      sheet.getRange(2, 1, lastRow - 1, sheet.getLastColumn()).clearContent();
    }
    const rows = dataDemo[sName];
    if (rows && rows.length > 0) {
      sheet.getRange(2, 1, rows.length, rows[0].length).setValues(rows);
    }
  }

  return { sukses: true, pesan: 'Seluruh demo data SMPI Yambu\'ul Qur\'an berhasil dimasukkan!' };
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
    } else if (fn === 'isiDemoData') {
      hasil = isiDemoData();
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
    } else if (fn === 'isiDemoData') {
      hasil = isiDemoData();
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
  } catch (errAI) {}

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
               "• Seni Hadrah / Banjari Al-Muhibbin\n" +
               "• Kepramukaan Gugus Depan Yaqu\n" +
               "• Olahraga (Futsal & Bulutangkis)\n" +
               "• Seni Kaligrafi Islam Kontemporer\n" +
               "• Muhadharah & Khitobah 3 Bahasa\n" +
               "• Bimbingan Literasi & Komputer IT"
    };
  }

  if (q.includes('prestasi') || q.includes('juara') || q.includes('lomba')) {
    return {
      jawaban: "🏆 *Prestasi Sekolah*\n\n" +
               "Siswa-siswi SMPI Yambu'ul Qur'an aktif mengukir prestasi dalam berbagai kompetisi keagamaan (MTQ/MHQ), seni Islami, dan akademik baik di tingkat kecamatan Plosoklaten maupun Kabupaten Kediri."
    };
  }

  if (q.includes('guru') || q.includes('ustadz') || q.includes('asatidz') || q.includes('pengajar')) {
    return {
      jawaban: "👨‍🏫 *Guru & Asatidz SMPI Yambu'ul Qur'an*\n\n" +
               "Para pengajar di SMPI Yaqu merupakan lulusan perguruan tinggi Islam dan umum terkemuka serta hafidz/hafidzah Al-Qur'an yang berdedikasi membina ilmu dan akhlak santri. Kepala Sekolah kami adalah Ust. H. Ahmad Fauzi, Lc., M.Pd."
    };
  }

  if (q.includes('fasilitas') || q.includes('gedung') || q.includes('asrama') || q.includes('lab') || q.includes('masjid')) {
    return {
      jawaban: "🏛️ *Fasilitas SMPI Yambu'ul Qur'an*\n\n" +
               "• Masjid Jami' Yambu'ul Qur'an yang representatif\n" +
               "• Gedung Asrama Santri (Boarding) bersih & nyaman\n" +
               "• Laboratorium Komputer Multimedia modern ber-AC\n" +
               "• Perpustakaan & Pojok Literasi Al-Qur'an\n" +
               "• Lapangan Olahraga Serbaguna (Futsal, Bulutangkis, Voli)\n" +
               "• Ruang Kelas Ber-AC & Multimedia"
    };
  }

  if (q.includes('halo') || q.includes('assalamu') || q.includes('hai') || q.includes('selamat') || q.includes('pagi') || q.includes('siang') || q.includes('sore') || q.includes('malam')) {
    return {
      jawaban: "Assalamu'alaikum Warahmatullahi Wabarakatuh! Selamat datang di Asisten Virtual SMPI Yambu'ul Qur'an. Ada yang bisa saya bantu seputar profil sekolah, program unggulan, guru, fasilitas, info pendaftaran (PPDB), atau kontak sekolah?"
    };
  }

  return {
    jawaban: "Terima kasih atas pertanyaan Anda. Untuk informasi lebih mendalam mengenai hal tersebut, silakan menghubungi layanan informasi SMPI Yambu'ul Qur'an langsung melalui WhatsApp panitia di " + profil.wa + " atau email " + profil.email + ".\n\nAnda juga dapat memilih topik cepat: Profil Sekolah, Program Unggulan, PPDB, Ekstrakurikuler, atau Kontak & Lokasi."
  };
}
