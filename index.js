const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const app = express();

app.use(express.json()); // Agar bisa membaca format JSON dari frontend

// 1. Inisialisasi Supabase
const SUPABASE_URL = 'https://zfjkdiawdxxqalifvcpcg.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_dsC0kS70hpLYgjnrYL3uBw_wuYRpcCc'; // Pastikan key lengkap Anda
const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

// ==========================================
// 2. AMBIL DATA (GET /api/bookings)
// ==========================================
app.get('/api/bookings', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .order('id', { ascending: true }); // Diurutkan berdasarkan ID

    if (error) throw error;
    res.json({ success: true, data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal mengambil data bookings" });
  }
});

// ==========================================
// 3. TAMBAH DATA (POST /api/bookings)
// ==========================================
app.post('/api/bookings', async (req, res) => {
  try {
    const { nama, wa, lokasi, acara } = req.body; // Sesuaikan dengan kolom tabel Anda
    
    const { data, error } = await supabase
      .from('bookings')
      .insert([{ nama, wa, lokasi, acara }])
      .select();

    if (error) throw error;
    res.json({ success: true, message: "Booking berhasil ditambahkan", data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal menambahkan data booking" });
  }
});

// ==========================================
// 4. EDIT / UPDATE DATA (PUT /api/bookings/:id)
// ==========================================
app.put('/api/bookings/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nama, wa, lokasi, acara } = req.body;

    const { data, error } = await supabase
      .from('bookings')
      .update({ nama, wa, lokasi, acara })
      .eq('id', id)
      .select();

    if (error) throw error;
    res.json({ success: true, message: "Booking berhasil diperbarui", data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal memperbarui data booking" });
  }
});

// ==========================================
// 5. HAPUS SATU DATA (DELETE /api/bookings/:id)
// ==========================================
app.delete('/api/bookings/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const { data, error } = await supabase
      .from('bookings')
      .delete()
      .eq('id', id);

    if (error) throw error;
    res.json({ success: true, message: "Booking berhasil dihapus", data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal menghapus data booking" });
  }
});

// ==========================================
// 6. RESET / HAPUS SEMUA DATA (DELETE /api/bookings)
// ==========================================
app.delete('/api/bookings', async (req, res) => {
  try {
    // Di Supabase, untuk menghapus semua baris tanpa kondisi, kita bisa pakai filter yang selalu benar (misal: id.neq.0 atau menghapus berdasarkan id > 0)
    const { data, error } = await supabase
      .from('bookings')
      .delete()
      .gt('id', 0); // Menghapus semua data yang id-nya > 0 (artinya semua data)

    if (error) throw error;
    res.json({ success: true, message: "Semua data bookings berhasil di-reset!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal mereset data bookings" });
  }
});

module.exports = app;