// Create web server
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

// Create comments array
var comments = [
  { id: 1, author: 'Morgan McCircuit', text: 'Great picture!' },
  { id: 2, author: 'Bending Bender', text: 'Excellent stuff' }
];

// Create a new comment
app.post('/api/comments', function(req, res) {
  var newComment = req.body;
  if(comments.length) {
    newComment.id = comments[comments.length - 1].id + 1;
  } else {
    newComment.id = 1;
  }
  comments.push(newComment);
  res.json(newComment);
});

// Get comments
app.get('/api/comments', function(req, res) {
  res.json(comments);
});

// Start the server
app.listen(3000, function() {
  console.log('Server started: http://localhost:3000/');
});
