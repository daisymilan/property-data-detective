const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

// Use CORS with dynamic origin check
const allowedOrigins = [
  /^https:\/\/property-data-detective\.vercel\.app$/,
  /^https:\/\/property-data-detective-git-(main|dev)-daisys-projects-0a438b62\.vercel\.app$/,
  /^https:\/\/property-data-detective-[a-z0-9]+\-daisys-projects-0a438b62\.vercel\.app$/
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // allow requests with no origin (like mobile apps)
    if (allowedOrigins.some(regex => regex.test(origin))) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'), false);
    }
  }
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
