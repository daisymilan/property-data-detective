const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

// Use CORS with specific origin
const allowedOrigins = ['https://property-data-detective.vercel.app'];
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
