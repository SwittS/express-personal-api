// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

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
