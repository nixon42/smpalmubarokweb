---
name: SMPI Yambu'ul Qur'an Design System
description: Madrasah Ilmiah Modern & Geometri Islam Kontemporer
colors:
  primary: "#0b3323"
  primary-dark: "#062116"
  primary-light: "#134e35"
  primary-soft: "#edf5f0"
  secondary: "#c39328"
  secondary-light: "#dfb342"
  secondary-dark: "#987118"
  secondary-pale: "#fbf5e7"
  ground: "#fcfbf7"
  surface: "#f4efe6"
  surface-card: "#ffffff"
  border: "#e6dfd1"
  text-main: "#142019"
  text-muted: "#57685e"
  text-subtle: "#84968c"
typography:
  display:
    fontFamily: "Marcellus, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.15
  headline:
    fontFamily: "Marcellus, Georgia, 'Times New Roman', serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.25
  title:
    fontFamily: "Marcellus, Georgia, 'Times New Roman', serif"
    fontSize: "1.35rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Outfit, system-ui, -apple-system, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  calligraphy:
    fontFamily: "Amiri, 'Traditional Arabic', serif"
    fontSize: "1.125rem"
    fontWeight: 700
  accessibility:
    fontFamily: "Atkinson Hyperlegible, Lexend, Verdana, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
rounded:
  sm: "8px"
  md: "14px"
  lg: "20px"
  xl: "28px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
---

# Design System: SMPI Yambu'ul Qur'an

Aesthetic World: **Madrasah Ilmiah Modern & Geometri Islam Kontemporer**

## Overview
Sistem desain visual SMPI Yambu'ul Qur'an dirancang untuk menghadirkan citra institusi pendidikan Islam terpadu yang berwibawa, teduh, ilmiah, dan berakar pada tradisi Qur'ani. Menolak pola visual "AI slop" (gradien neon ungu-biru, efek halo menyilaukan, dan kartu repetitif), sistem ini menggabungkan kehangatan material batu pasir (*warm sandstone/bone*), kehormatan hijau zamrud akademisi (*scholarly emerald*), serta aksen emas bakar kuningan (*burnished antique brass*).

## Colors
- **Scholarly Emerald (`#0b3323`, `#062116`)**: Warna dasar utama yang melambangkan keteduhan spiritual, kedalaman ilmu pengetahuan pesantren, dan ketenangan jiwa Qur'ani.
- **Warm Bone / Sandstone (`#fcfbf7`, `#f4efe6`)**: Warna latar belakang hangat yang terinspirasi dari naskah manuskrip Al-Qur'an dan dinding arsitektur mediterania/timur tengah, menggantikan warna abu-abu sintetis generik.
- **Burnished Antique Brass (`#c39328`, `#dfb342`, `#987118`)**: Aksen emas mulia bersahaja untuk tombol CTA pendaftaran, medali prestasi, dan lencana akreditasi. Memenuhi standar kontras WCAG AA (≥4.5:1).
- **Deep Pine Charcoal (`#142019`)**: Tinta tipografi utama dengan ketajaman baca maksimal dan kelembutan visual bagi mata pembaca.

## Typography
- **Marcellus (Headings & Display)**: Tipografi serif monumental Romawi-Islam klasik yang memberikan kesan akademik berwibawa dan abadi pada setiap judul bab, nama sekolah, dan ucapan pimpinan.
- **Amiri (Arabic Motto & Calligraphy)**: Font kaligrafi naskh autentik untuk semboyan institusi *يَنبُوعُ القُرآن* (Mata Air Al-Qur'an).
- **Outfit (Body & Interface Text)**: Sans-serif geometris modern berkarakter terbuka yang menjamin keterbacaan tinggi pada berbagai perangkat smartphone wali santri.

## Layout
- **Institutional Colophon Topbar**: Memuat identitas legalitas (NPSN 70003325, Akreditasi B BAN-S/M), kaligrafi motto arab, kontak langsung WA/Email, dan pemilih bahasa.
- **Editorial Split Hero**: Menggantikan banner carousel datar dengan komposisi editorial dua kolom: proposisi nilai akademis di sisi kiri dengan 4 metrik pilar kepercayaan, serta frame Campus Lens rasio 16:10 di sisi kanan.
- **Tranquil Prayer Ribbon**: Pita waktu sholat terpadu berdasar hisab Kemenag RI untuk wilayah Kediri tanpa mengganggu fokus baca pengunjung.
- **Four Core Pillars of Yaqu**: Struktur kurikulum 4 pilar (Tahfidz Bersanad, Integrasi Sains & Riset, Dwi-Bahasa Arab-Inggris, Karakter & Adab Santri).

## Elevation & Depth
- Menggunakan neutral elevation shadows (`rgba(0, 0, 0, 0.04)` hingga `rgba(0, 0, 0, 0.12)`) dengan difusi lembut.
- Menolak keras glowing halos (zero-offset neon box-shadows) dan offset 4px 4px borderless shadows.

## Shapes
- Kartu arsitektural (`.card-scholar`): Border halus 1px `#e6dfd1`, radius 20px (`rounded-2xl` hingga `rounded-3xl`), dengan mikro-interaksi angkat 3px dan highlight border emas tipis saat hover.

## Components
- **PPDB CTA Button**: Tombol kapsul penuh (`rounded-full`) dengan aksen emas bakar dan teks emerald tegas yang memandu calon wali santri mendaftar.
- **Waktu Sholat Card**: Menampilkan countdown cerdas ke waktu sholat berikutnya dengan penanda aktif yang tenang.
- **Editorial Card Grid**: Format artikel jurnal dengan foto rasio 16:9, label kategori rapi, dan tautan baca selengkapnya.

## Do's and Don'ts
- **DO**: Selalu gunakan kombinasi kontras tinggi (minimal 4.5:1 untuk teks normal).
- **DO**: Sertakan legalitas resmi (NPSN 70003325, Akreditasi B, SK Operasional) pada tempat yang terhormat.
- **DON'T**: Jangan pernah meletakkan kicker/eyebrow chip di atas heading utama.
- **DON'T**: Jangan pernah menggunakan teks berwarna gradien (gradient text) atau efek glow neon biru/ungu artifisial.
- **DON'T**: Jangan menggunakan kartu seragam dengan pola repetitif icon + heading + 3 baris teks.
