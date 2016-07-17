// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var profile = [
  {
  name: "Switt Srikulacheep",
  current_city: "San Francisco",
  hometown: "Chicago",
  occupation: "Student at General Assembly",
  email: "switt.srikulacheep@gmail.com",
  documentation_url: "https://github.com/SwittS/express-personal-api/blob/master/README.md",
  base_url: "https://powerful-savannah-76554.herokuapp.com/"
  }
];

var dance_moves = [
  {
    name: "The Pelvic Thrust",
    yearCreated: 1957,
    participation: "Solo and Partner",
    socialContext: "Concert, Erotic, and Social",
    url: "TBD"
  }
];

db.Dancemove.remove({}, function(err, dancemove) {
  if(err) {
    console.log('Error occured in remove', err);
  } else {
    console.log('removed all dancemoves');

  db.Dancemove.create(dance_moves, function(err, dancemove){
      if (err){ return console.log("Error: ", err); }
      console.log("Created new dancemove", dancemove);
      process.exit();
    });
  }
});

db.Profile.remove({}, function(err, data) {
  if (err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed profile');

    db.Profile.create(profile, function(err, data){
      if (err) {
        return console.log('err', err);
      }
      console.log("created", data.length, "profile");
      process.exit();
    });
  }
});
