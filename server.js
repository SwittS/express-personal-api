// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    name: "Switt Srikulacheep",
    current_city: "San Francisco",
    hometown: "Chicago",
    occupation: "Student at General Assembly",
    email: "switt.srikulacheep@gmail.com",
    documentation_url: "https://github.com/SwittS/express-personal-api/blob/master/README.md",
    base_url: "https://powerful-savannah-76554.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"},
      {method: "GET", path: "/api/dancemoves", description: "Index of all the dance moves"},
      {method: "POST", path: "/api/dancemoves", description: "Create a new dance move entry"},
      {method: "PUT", path: "/api/dancemoves/:id", description: "Edit a previous dance move entry and update it"},
      {method: "DELETE", path: "/api/dancemoves/:id", description: "Destroy a dance move"}
    ]
  });
});

  app.get('/api/profile', function api_profile(req, res){
    res.json({
      name: "Switt Srikulacheep",
      current_city: "San Francisco",
      hometown: "Chicago",
      occupation: "Student at General Assembly",
      email: "switt.srikulacheep@gmail.com",
      documentation_url: "https://github.com/SwittS/express-personal-api/blob/master/README.md",
      base_url: "https://powerful-savannah-76554.herokuapp.com/"
    });

  });

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
