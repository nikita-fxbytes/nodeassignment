require('dotenv').config();
const connectToMongo = require('./db');
const express = require('express');
connectToMongo();
var cors = require('cors')
const app = express();
const port = process.env.PORT
app.use(express.json());
app.use(cors())
// Route
app.use('/api', require('./routes/task'));
// End
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })