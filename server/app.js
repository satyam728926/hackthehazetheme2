const express = require('express');
const cors = require('cors');

const scrapeRoute = require('./routes/scrapeRoute');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/scrape', scrapeRoute);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

module.exports = app;
