const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const authRouter = require('./routes/authRouter');
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/public', express.static(__dirname + '/public'));

app.use('/v1', authRouter);
app.use('/v1', adminRouter);
app.use('/v1', userRouter);

module.exports = app;
