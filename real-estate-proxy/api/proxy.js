const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

// Use CORS with specific origin
const allowedOrigins = [
  'https://property-data-detective.vercel.app',
  'https://property-data-detective-git-main-daisys-projects-0a438b62.vercel.app',
  'https://property-data-detective-git-dev-daisys-projects-0a438b62.vercel.app',
  'https://property-data-detective-8qm3ghubb-daisys-projects-0a438b62.vercel.app'
];
app.use(cors({
    origin: allowedOrigins,
}));

app.use(express.json());

app.post('/api/proxy', async (req, res) => {
  try {
    const response = await axios.post(
      'https://n8n.servenorobot.com/webhook/real-estate-bot',
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