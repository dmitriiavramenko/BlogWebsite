const uri = "mongodb+srv://dbAdmin:dbAdminPassword@cluster0.antlr.mongodb.net/Blog-Database?retryWrites=true&w=majority";
const express = require("express");
const mongoose = require("mongoose");
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

//connect to database
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log("Database connected!");
});

//verify the database is connected
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//create dynamic schemas to read user records and user posts from database
let User = require('../modules/user-schema');
let Post = require('../modules/post-schema');

app.get("/api", (req, res) => {
    res.json({message: "Hello world!"});
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

//testing user records -> searching for one user
  app.get('/users', (req, res) => {
    res.send("searching for username: AminaTesting!");
    let id = "AminaTesting";
    const result = User.findOne({username: id}).exec().then(function(result){
        console.log(result)
      })
})

//testing user records -> searching for all users in the database
app.get('/usersList', (req, res) => {
    res.send("Searching for all User Records!");
    const result = User.find().exec().then(function(result){
        console.log(result)
      })
})

//testing user posts -> searching for a specific post by a user
app.get('/posts', (req, res) => {
  res.send("searching for post by AminaTesting!");
  let id = "AminaTesting";
  const result = Post.findOne({username: id}).exec().then(function(result){
      console.log(result)
    })
})

//testing user posts -> searching for all posts in the database
app.get('/postsList', (req, res) => {
  res.send("Searching for all User Records!");
  const result = Post.find().exec().then(function(result){
      console.log(result)
    })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});