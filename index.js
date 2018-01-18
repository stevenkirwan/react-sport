const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');
const axios = require('axios');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Get all 
app.get('/api/leagues', function(req, res) { 
    axios.get('http://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
    .then(response => {
        res.json(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}); 

// Get based on country
app.get('/api/search/:country', function(req, res) { 
    axios.get(`http://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=${req.params.country}`)
    .then(response => {
        res.json(response.data);
    })
    .catch(error => {
        console.log(error);
    });
});

// Get league info
app.get('/api/league/:id', function(req, res) { 
    axios.get(`http://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${req.params.id}`)
    .then(response => {
        res.json(response.data);
    })
    .catch(error => {
        console.log(error);
    });
});

// Get league table
app.get('/api/table/:id', function(req, res) { 
    axios.get(`http://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=${req.params.id}`)
    .then(response => {
        res.json(response.data);
    })
    .catch(error => {
        console.log(error);
    });
});

// Get team info
app.get('/api/team/:id', function(req, res) { 
    axios.get(`http://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${req.params.id}`)
    .then(response => {
        res.json(response.data);
    })
    .catch(error => {
        console.log(error);
    });
});

// Next events
app.get('/api/next-events/:id', function(req, res) { 
    axios.get(`http://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${req.params.id}`)
    .then(response => {
        res.json(response.data);
    })
    .catch(error => {
        console.log(error);
    });
});

// Prev events
app.get('/api/prev-events/:id', function(req, res) { 
    axios.get(`http://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${req.params.id}`)
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
