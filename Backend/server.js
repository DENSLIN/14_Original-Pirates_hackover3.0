const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true,  useUnifiedTopology: true }
)

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/event');
const usersRouter = require('./routes/users');

app.use('/event', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port,'192.168.3.240', () => {
    console.log(`Server is running on port: ${port}`);
});