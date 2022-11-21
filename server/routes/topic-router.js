const express = require('express');
const router = express.Router();
const db = require('../configs/db.js');

router.get('/', (req, res) => {
  res.send('')
})

router.post('/today', (req, res) => {
  const dateToday = req.body.today;
  db.query('SELECT * FROM topics;')
    .then(data => {
      const topics = data.rows;
      const topicToday = topics.find(topic => {
        if (topic.date_created.toString().slice(0,15) === dateToday) {
          return topic;
        };
      })
      console.log(topicToday);
      res.send(topicToday);
    })
    .catch(err => {
      console.error(err.message);
    })
})

module.exports = router;