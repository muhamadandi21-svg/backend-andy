const { createClient } = require('@supabase/supabase-js');

// 1. Inisialisasi Supabase (Gunakan URL dan Publishable/Anon key Anda)
const SUPABASE_URL = 'https://zfjkdiawdxxqalifvcpcg.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_dsC0kS70hpLYgjnrYL3uBw_wuYRpcCc'; // Pastikan kunci lengkap Anda
const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

// 4. DELETE BOOKING (Menghapus booking berdasarkan ID menggunakan Supabase)
app.delete('/api/bookings/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Perintah Supabase untuk menghapus data berdasarkan ID
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

// 5. DELETE EXPENSE (Menghapus pengeluaran berdasarkan ID menggunakan Supabase)
app.delete('/api/expenses/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Perintah Supabase untuk menghapus data dari tabel expenses
    const { data, error } = await supabase
      .from('expenses')
      .delete()
      .eq('id', id);

    if (error) throw error;

    res.json({ success: true, message: "Expense berhasil dihapus", data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal menghapus data expense" });
  }
});