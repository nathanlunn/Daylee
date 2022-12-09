const express = require('express');
const router = express.Router();
const db = require('../configs/db.js');

router.post('/', (req, res) => {
  const commentID = req.body.commentID;
  const userID = req.body.userID;

  db.query('SELECT * FROM upvotes WHERE user_id = $1 AND comment_id = $2', [userID, commentID])
    .then(data => {
      res.send(data.rows);
    })
    .catch(err => {
      console.error(err.message);
    })
})

router.post('/add', (req, res) => {
  const commentID = req.body.commentID;
  const userID = req.body.userID;

  db.query('SELECT * FROM upvotes WHERE user_id = $1 AND comment_id = $2;', [userID, commentID])
    .then(data => {
      if(data.rows.length === 0) {
        res.send('alreadt upvoted');
        return;
      }
      db.query('INSERT INTO upvotes (user_id, comment_id) VALUES ($1, $2);', [userID, commentID])
        .then(data => {
          res.status(200);
        })
        .catch(err => {
          console.error(err.message);
        })
    })
    .catch(err => {
      console.error(err.message);
    })
})

module.exports = router;