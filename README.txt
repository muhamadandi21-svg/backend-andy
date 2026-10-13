ANDI PHOTOGRAPHY — STARTER WEBSITE
==================================
Paket berisi website publik, halaman admin, CSS, JavaScript, konfigurasi Supabase, dan SQL keamanan.

PENTING: kode belum terhubung ke Supabase Anda dan belum dipublikasikan di internet. Ikuti langkah berikut.

1. CONFIG SUPABASE
- Buka Supabase project > Project Settings > API Keys (atau Data API).
- Salin Project URL dan Publishable/anon public key.
- Ganti placeholder di config.js.
- Jangan pernah gunakan service_role/secret key di website.

2. BUAT ADMIN
- Buka Authentication > Users lalu buat user admin.
- Salin UUID user admin tersebut.

3. BUAT STORAGE
- Storage > New bucket > nama: portfolio-media.
- Set bucket PUBLIC supaya media bisa tampil di website. Jangan unggah media privat.

4. PASANG SQL
- Buka schema.sql.
- Ganti setiap YOUR_ADMIN_USER_UUID dengan UUID user admin.
- Jalankan seluruh SQL di Supabase SQL Editor.

5. PUBLIKASIKAN GRATIS DENGAN GITHUB PAGES
- Buat repository GitHub baru, misalnya andi-photography.
- Upload index.html, admin.html, style.css, app.js, config.js ke root repo.
- Buka Settings > Pages > Deploy from a branch > main > /(root) > Save.
- Setelah live, halaman admin ada di URL website + /admin.html.

6. GANTI DATA CONTOH
Email, WhatsApp, Instagram, tautan CV, profil, dan riwayat pekerjaan dapat diatur dari halaman admin setelah tabel database terbaru diterapkan. Tidak perlu mengubah kode untuk pembaruan konten tersebut.
Gambar di website saat pertama dibuka adalah gambar demo. Ganti dengan karya asli melalui admin setelah koneksi Supabase aktif.

CATATAN
- Admin bisa tambah, edit metadata, ganti file, publish/draft, dan menghapus metadata.
- Hapus item tidak otomatis menghapus file di Storage; hapus file lama secara manual untuk menghemat kuota.
- Bucket public membuat file yang URL-nya diketahui bisa dilihat siapa saja.
- Supabase Free memiliki kuota dan batasan yang bisa berubah; cek Usage sebelum upload banyak video.
- Jangan membagikan password, database password, atau secret/service_role key.


PENGATURAN PROFIL & KONTAK
Halaman admin sekarang memiliki form Informasi kontak & profil (brand, email, WhatsApp, Instagram, link CV, deskripsi singkat).
Setelah mengganti kode, jalankan SQL schema.sql yang telah diperbarui di Supabase SQL Editor untuk membuat tabel site_settings dan policy-nya.
Catatan: SQL menggunakan UID admin de81db5a-2653-42fc-bede-501f60c71929. Pastikan itu benar milik akun admin kamu.
Nomor WhatsApp masukkan dengan kode negara, angka saja, contoh Indonesia: 62812xxxxxxx. Link CV harus berupa URL yang bisa diakses publik.


PEMBARUAN EDITOR WEBSITE
- Panel admin sekarang menyediakan pengaturan nama brand, kontak, intro, judul dan deskripsi bagian karya, judul/deskripsi Tentang Saya, foto hero, foto Tentang Saya, warna aksen, statement, serta tagline. Isi URL foto dengan URL publik yang bisa diakses browser.
- Setiap karya punya pengaturan rasio Otomatis, 1:1, 4:5, 3:2, 4:3, 16:9, atau 9:16 dan mode Isi Frame / Tampilkan Seluruh Foto.
- Video dibuka di pemutar modal; foto dibuka lebih besar di layar.
- Setelah mengganti paket, jalankan schema.sql terbaru di Supabase SQL Editor lalu unggah ulang semua file website ke GitHub Pages. Jangan unggah secret/service_role key.


FULL EDITOR UPDATE
Di admin.html, bagian Informasi kontak & profil sekarang memuat editor tambahan untuk hero, label/teks tiap bagian, empat kartu keahlian, tombol kontak, footer, warna latar/teks, dan gaya galeri. Semua nilai tersimpan di tabel site_settings. Rasio setiap foto/video diatur di form karya. Jalankan schema.sql terbaru satu kali di Supabase SQL Editor, lalu unggah seluruh isi folder ini ke GitHub Pages.
