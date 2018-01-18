const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');
const axios = require('axios');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/leagues', function(req, res) { 
    axios.get('http://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
    .then(response => {
        res.json(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}); 

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Listening on ${port}`);
