const express = require('express');
const router = express.Router();
const db = require('../configs/db.js');

router.post('/', (req, res) => {
  const commentID = req.body.commentID;
  const userID = req.body.userID;

  console.log(`user id: ${userID}, comment id: ${commentID}`);
})

module.exports = router;