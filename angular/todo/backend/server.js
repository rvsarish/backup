const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
const routes = require('./routes/ToDoRoute.js');
const PORT = process.env.PORT || 5000;
mongoose
.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));
app.use(express.json()); 
app.use(cors());
app.use(routes)
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
