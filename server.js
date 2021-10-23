const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
const routes = require('./routes/api.js');

mongoose.connect("mongodb+srv://admin-Arunn:arunn123@cluster0.hcckn.mongodb.net/roughNote?retryWrites=true&w=majority",{useNewUrlParser : true});
//mongoose.connect('mongodb://localhost:27017/mypro');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use('/', routes);

// app.use(express.static(path.join(__dirname, '../client/build')))
// app.get('*', function (req, res) {
//   const index = path.join(__dirname, 'client','build', 'index.html');
//   res.sendFile(index);
// });

app.get('/',(req,res)=>{
  res.send("Hello here");
})

app.listen(process.env.PORT || 8000, function(req, res) {
  console.log("Server is running");
});
