const express = require('express');
const cors = require('cors');
const { neon } = require('@neondatabase/serverless');

const app = express();

// WAJIB: Mengizinkan CodePen mengambil data tanpa terblokir CORS
app.use(cors());
app.use(express.json());

// Mengambil Connection String dari Environment Variable Vercel
const sql = neon(process.env.DATABASE_URL);

// Endpoint Tes Server
app.get('/api', (req, res) => {
  res.json({ message: "Backend Andy Photography Aktif!" });
});

// 1. GET ALL BOOKINGS
app.get('/api/bookings', async (req, res) => {
  try {
    const result = await sql`SELECT * FROM bookings ORDER BY date DESC`;
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal mengambil data bookings" });
  }
});

// 2. GET ALL EXPENSES
app.get('/api/expenses', async (req, res) => {
  try {
    const result = await sql`SELECT * FROM expenses ORDER BY date DESC`;
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal mengambil data expenses" });
  }
});

// 3. GET ALL GEAR
app.get('/api/gear', async (req, res) => {
  try {
    const result = await sql`SELECT * FROM gear ORDER BY id ASC`;
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal mengambil data gear" });
  }
});

module.exports = app;