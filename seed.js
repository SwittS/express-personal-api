// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var dance_moves = [
  {
    name: "The Pelvic Thrust",
    yearCreated: 1957,
    participation: "Solo and Partner",
    socialContext: "Concert, Erotic, and Social",
    gif: "http://24.media.tumblr.com/tumblr_lzi5aqZ1Ek1rn95k2o1_250.gif"
  },
  {
    name: "The Carlton",
    yearCreated: 1991,
    participation: "Solo, Partner, and Group",
    socialContext: "Social",
    gif: "https://66.media.tumblr.com/504cb94fe0f41e563f435ee2f833dcb5/tumblr_n4ra60H5W41rkoffro1_400.gif"
  },
  {
    name: "The Worm",
    yearCreated: 1920,
    participation: "Solo",
    socialContext: "Concert, Social, and Street",
    gif: "https://media.giphy.com/media/Q4ah52WMLegA8/giphy.gif"

  },
  {
    name: "The Moonwalk",
    yearCreated: 1983,
    participation: "Solo",
    socialContext: "Social and Street",
    gif: "https://media.giphy.com/media/sJs1Ag97x0MV2/giphy.gif"
  },
  {
    name: "The Cabbage Patch",
    yearCreated: 1987,
    participation: "Solo, Partner, and Group",
    socialContext: "Social, and Street",
    gif: "https://media4.giphy.com/media/a0Cmdhax5VTEc/200.gif"
  },
  {
    name: "The Sprinkler",
    yearCreated: 1987,
    participation: "Solo and Group",
    socialContext: "Concert and Social",
    gif: "https://media.giphy.com/media/R6bGrrwtJAXao/giphy.gif"
  },
  {
    name: "The Electric Slide",
    yearCreated: 1976,
    participation: "Group",
    socialContext: "Social",
    gif: "https://media.giphy.com/media/SfIgj5XssPVde/giphy.gif"
  },
  {
    name: "The Cupid Shuffle",
    yearCreated: 2007,
    participation: "Group",
    socialContext: "Social",
    gif: "https://media.giphy.com/media/iF2ghsh487piU/giphy.gif"
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
