const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const db = require('../db');

function generateId({ name, dob, favoriteColor, luckyNumber }) {
  const hash = crypto.createHash('sha256');
  hash.update(`${name}|${dob}|${favoriteColor}|${luckyNumber}`);
  return hash.digest('hex');
}

// POST /generate-id
router.post('/generate-id', (req, res) => {
  const { name, dob, favoriteColor, luckyNumber } = req.body;
  const userId = generateId({ name, dob, favoriteColor, luckyNumber });
  res.json({ userId });
});

// GET /result?userId=...
router.get('/result', (req, res) => {
  const { userId } = req.query;
  db.query('SELECT personality_type FROM users WHERE id = ?', [userId], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length > 0) {
      res.json({ personality: results[0].personality_type });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });
});

// POST /result
router.post('/result', (req, res) => {
  const { userId, name, dob, favoriteColor, luckyNumber } = req.body;
  const personalities = ['Explorer', 'Thinker', 'Leader', 'Helper', 'Innovator'];
  const personality = personalities[Math.floor(Math.random() * personalities.length)];

  db.query('INSERT INTO users SET ?', {
    id: userId,
    name,
    dob,
    favorite_color: favoriteColor,
    lucky_number: luckyNumber,
    personality_type: personality,
  }, (err) => {
    if (err) return res.status(500).send(err);
    res.json({ personality });
  });
});

module.exports = router;
