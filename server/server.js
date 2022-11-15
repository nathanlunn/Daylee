const express =  require('express');
const app = express();

const userRouter = require('./routes/user-router.js');

app.use('/users', userRouter);

app.listen(8000)