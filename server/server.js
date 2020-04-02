// Importing required modules
import express from 'express';
const mysql = require('mysql');
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import morgan from 'morgan';
// import winston from 'winston';

// Defining Database
const db = mysql.createConnection({
  host     : '23.19.227.210',
  user     : 'root',
  password : 'Ashland@2019',
  database : 'collectionsmax'
});

// Connect

db.connect((err) => {
  if(err){
    throw(err)
  }
  console.log('MySQL Connected')
});

// connection.query('SELECT d.id, d.filenumber, d.fullname, d.address, d.address2, d.city, d.state, d.zip, d.clientname, d.portfolio, d.statusname, d.statuscolor as color from collectionsmax.dbase d limit 10', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });


// Defining port
const port = process.env.PORT || 9000;

// Defining app
const app = express();

// Defining middlewares
// app.use(morgan('combined'));
// app.use(bodyParser.json());
// app.use(cors());

// Create DB
app.get('/api/select-dbase', (req, res) => {
  let sql = 'SELECT d.id, d.filenumber, d.statuscolor as color, d.statusname as status, d.fullname as name, d.address, d.address2, d.city, d.state, d.zip FROM collectionsmax.dbase d limit 10';
  db.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result)
      res.send(result)
  })
})

// Create Table
app.get('/api/create-table', (req, res) => {
  let sql = `CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))`
  db.query(sql, (err, result) => {
    if(err) throw err
    console.log(result)
    res.send('Posts table created...')
  })
})

  // Insert Post 1
  app.get('/api/add-post', (req, res) => {
    let post = {title:'Post One', body:'This is a sample post'}
    let sql = 'INSERT INTO posts SET ?'
    let query = db.query(sql, post, (err, result) => {
      if(err) throw err
      console.log(result)
      res.send('Post 1 added...')
    })
})

  // Insert Post 2
  app.get('/api/add-post-2', (req, res) => {
    let post = {title:'Post Two', body:'This is a sample post'}
    let sql = 'INSERT INTO posts SET ?'
    let query = db.query(sql, post, (err, result) => {
      if(err) throw err
      console.log(result)
      res.send('Post 2 added...')
    })
})

  // Select Posts
  app.get('/api/select-posts', (req, res) => {
    let sql = 'SELECT * FROM posts'
    let query = db.query(sql, (err, results) => {
      if(err) throw err
      console.log(results)
      res.send(results)
    })
})

  // Select Single Post with Variable in URL
  app.get('/api/select-post/:id', (req, res) => {
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`
    let query = db.query(sql, (err, result) => {
      if(err) throw err
      console.log(result)
      res.send(result)
    })
})
// Example: http://localhost:9000/api/select-post/1


  // Update Post
  app.get('/api/update-post/:id', (req, res) => {
    let newTitle = 'Updated Title'
    let sql = `UPDATE posts set title = '${newTitle}' WHERE id = ${req.params.id}`
    let query = db.query(sql, (err, result) => {
      if(err) throw err
      console.log(result)
      res.send(result)
    })
})

  // Delete Post
  app.get('/api/delete-post/:id', (req, res) => {
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`
    let query = db.query(sql, (err, result) => {
      if(err) throw err
      console.log(result)
      res.send(result)
    })
})

app.set('view engine', 'html');

// Static folder
app.use(express.static(__dirname + '/views/'));

// Defining the Routes
app.use('/api', require('./routes/index'));

// Listening to port
app.listen(port);
console.log(`Listening On http://localhost:${port}/api`);

module.exports = app;
