const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('working');
})

router.post('/login', (req, res) => {
  console.log('working');
})

module.exports = router;