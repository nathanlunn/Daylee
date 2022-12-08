const express = require('express');
const router = express.Router();
const db = require('../configs/db.js');

router.post('/', (req, res) => {
  const commentID = req.body.commentID;
  const userID = req.body.userID;

  // console.log(`user id: ${userID}, comment id: ${commentID}`);
  db.query('INSERT INTO upvotes (user_id, comment_id) VALUES ($1, $2);', [userID, commentID])
    .then(data => {
      res.status(200);
    })
    .catch(err => {
      console.error(err.message);
    })
})

module.exports = router;