const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

// Allow requests from your frontend's origin
app.use(cors({
  origin: 'https://property-data-detective-8qm3ghubb-daisys-projects-0a438b62.vercel.app'
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
