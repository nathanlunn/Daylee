const express = require('express');
const router = express.Router();
const db = require('../configs/db.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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

router.post('/signup', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const bio = req.body.bio;
  const imageURL = req.body.imageURL;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if(err) {
      console.error(err);
      return;
    }
    console.log(hash);
    // db.query('INSERT INTO users (name, email, password, bio, image) VALUES ($1, $2, $3, $4, $5) RETURN;', [name, email, hash, bio, imageURL])
    //   .then(res => {

    //   })
    //   .catch(err => {
    //     console.error(err.message);
    //   })
  })
})

module.exports = router;