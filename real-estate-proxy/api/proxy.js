const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

// Use CORS with specific origin
const allowedOrigins = ['https://2899f02b-3ec8-4d9d-9f23-726191b18bd8.lovableproject.com'];
app.use(cors({
    origin: allowedOrigins,
}));

app.use(express.json());

app.post('/api/proxy', async (req, res) => {
  try {
    const response = await axios.post(
      'https://n8n.servenorobot.com/webhook/real-estate',
      req.body,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error proxying request' });
  }
});

module.exports = app;
