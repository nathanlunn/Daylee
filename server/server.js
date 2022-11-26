const express =  require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

const db = require('./configs/db.js');

const PORT = process.env.PORT || 8000;

const userRouter = require('./routes/user-router.js');
const topicRouter = require('./routes/topic-router.js');

app.use('/users', userRouter);
app.use('/topics', topicRouter)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})