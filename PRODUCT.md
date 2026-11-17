# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

1. **Calon Wali Santri & Orang Tua**: Mencari lembaga pendidikan menengah Islam terpercaya di Kediri dan sekitarnya yang memadukan tahfidz Al-Qur'an intensif, asrama/boarding berkarakter, dan akademik berkualitas untuk putra-putrinya.
2. **Santri & Wali Murid Aktif**: Memantau kalender kegiatan sekolah, jadwal sholat, agenda ujian, prestasi, berita sekolah, serta karya santri.
3. **Masyarakat, Donatur & Simpatisan**: Menyalurkan infaq, wakaf Al-Qur'an, dan beasiswa santri dhuafa/tahfidz kepada Yayasan Yambu'ul Qur'an.
4. **Pimpinan & Admin Sekolah**: Mengelola publikasi artikel, pengumuman, data asatidz, dan penerimaan santri baru secara mandiri melalui CMS terintegrasi Google Sheets.

## Product Purpose

Menjadi representasi digital resmi, terpercaya, dan bermartabat dari SMPI Yambu'ul Qur'an Plosoklaten Kediri. Memberikan informasi komprehensif, transparan, dan inspiratif seputar program tahfidz bersanad, kurikulum terpadu, fasilitas asrama/kampus, serta kemudahan pendaftaran PPDB dan interaksi langsung melalui WhatsApp dan Chatbot AI.

## Positioning

Sekolah Menengah Pertama Islam terpadu berbasis pesantren di bawah naungan Yayasan Yambu'ul Qur'an di Plosoklaten, Kediri. Menghubungkan kedalaman tradisi tahfidz Al-Qur'an bersanad dan adab islami dengan wawasan sains modern, keahlian bahasa bilingual (Arab & Inggris), serta tata kelola digital cerdas.

## Operating Context

- Lingkungan web publik berbasis single-page application (SPA) statis yang di-deploy di GitHub Pages (`https://nixon42.github.io/smpalmubarokweb/`).
- Backend serverless tanpa biaya hosting menggunakan Google Apps Script terhubung Google Sheets sebagai database dinamis.
- Akses mobile-first oleh wali santri melalui smartphone dengan berbagai kualitas koneksi internet di pedesaan maupun perkotaan Jawa Timur.
- Sesuai kaidah lembaga pendidikan Islam: santun, sejuk, informatif, dan menjunjung tinggi adab serta akurasi legalitas (NPSN 70003325, Akreditasi B).

## Capabilities and Constraints

- **Single Page Navigation**: Pengunjung dapat menjelajah beranda dan section detail (Artikel, Guru, Program, Ekskul, Prestasi, Fasilitas, Donasi, Galeri, Karya Santri).
- **Live Database Sync**: Memuat konten, banner, artikel, data guru, donasi, dan pengaturan dari endpoint Google Apps Script secara real-time.
- **Kemandirian Aset**: Aset logo resmi (`logo.png`, `splash-logo.webp`) tersimpan lokal tanpa ketergantungan CDN eksternal yang rentan putus.
- **Waktu Sholat Otomatis**: Perhitungan hisab akurat berdasarkan koordinat Plosoklaten, Kediri (Kemenag RI).
- **Asisten Chatbot AI**: Memberikan jawaban instan 24 jam khusus informasi SMPI Yambu'ul Qur'an.
- **Portal CMS Terintegrasi**: Mengelola 13+ sheet langsung dari browser melalui otentikasi token aman.

## Brand Commitments

- **Nama Resmi**: SMPI Yambu'ul Qur'an
- **Yayasan**: Yayasan Yambu'ul Qur'an
- **Motto / Tagline**: *"Membentuk Generasi Qur'ani, Berakhlak Mulia & Berprestasi"*
- **Motto Bahasa Arab**: يَنبُوعُ القُرآن (Yambu'ul Qur'an — Mata Air Al-Qur'an)
- **Legalitas**: NPSN 70003325 | SK Operasional: 414-44/2053/418.20/2023 | Akreditasi B
- **Kontak Resmi**: Telepon/WhatsApp 0815-1577-7911 | Email: smpiyaqu@gmail.com | Instagram: @smpiyaqu_kediri
- **Alamat**: Jl. Agung Ds. Jarak RT 04/ RW 02, Desa Jarak, Kec. Plosoklaten, Kab. Kediri, Jawa Timur

## Evidence on Hand

- Logo resmi vektor 512×512 transparan (`logo.png`, `splash-logo.webp`).
- 6 artikel demo lengkap dengan metadata dan format tanggal Indonesia.
- 8 data guru & asatidz terverifikasi di Google Sheets.
- 4 program unggulan, 6 ekskul, 4 prestasi, 6 fasilitas, 4 statistik, 3 testimoni alumni, 4 agenda.
- 2 rekening resmi yayasan (BSI & Bank Jatim Syariah).

## Product Principles

1. **Bermartabat & Teduh**: Desain mencerminkan kemuliaan Al-Qur'an dan kesungguhan akademik pesantren, bukan kesan komersial glamor atau artifisial.
2. **Keterbacaan & Kejelasan Tertinggi**: Wali santri dapat menemukan informasi biaya, pendaftaran, kurikulum, dan kontak dalam hitungan detik.
3. **Bebas AI Slop**: Hindari efek visual generik (gradient text ungu-biru, glowing halo berlebih, kartu seragam repetitif, elemen hiasan tanpa fungsi). Desain harus terasa digarap dengan ketelitian tangan manusia (craftsmanship).
4. **Resposif & Cepat**: Performa optimal di layar seluler dengan tipografi tajam, layout ergonomis, dan transisi halus.
