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
      if(!data.rows[0]) {
        res.send('There is No Daylee User With That Email.');
        return;
      }
      const user = data.rows[0];
      if(user.password !== password) {
        res.send('That is Not the Correct Password for That Email.');
        return;
      }
      res.send(user);
    })
})

module.exports = router;