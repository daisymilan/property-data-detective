const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

// Use CORS with wildcard to allow all origins and methods
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
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
