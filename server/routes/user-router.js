const express = require('express');
const router = express.Router();
const db = require('../configs/db.js');

router.get('/', (req, res) => {
  res.send('working');
})

router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email);

  db.query('SELECT * FROM users WHERE email = $1;', [email])
    .then(data => {
      console.log(data.rows[0]);
    })
})

module.exports = router;