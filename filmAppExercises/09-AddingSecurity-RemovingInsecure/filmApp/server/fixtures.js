if (Films.find().count() === 0) {
  var now = new Date().getTime();

  var frankId = Meteor.users.insert({
    profile: {
      name: 'Frank Zappa'
    }
  });
  var frank = Meteor.users.findOne(frankId);

  var leoId = Meteor.users.insert({
    profile: {
      name: 'Leonard Bernstein'
    }
  });
  var leo = Meteor.users.findOne(leoId);

  var jawsId = Films.insert({
    title: "Jaws",
    year: "1975",
    userId: frank._id,
    author: frank.profile.name,
    director: "Steven Spielberg",
    plot: "When a gigantic great white shark begins to menace the small island community of Amity, a police chief, a marine scientist and grizzled fisherman set out to stop it.",
    submitted: new Date(now - 7 * 3600 * 1000)
  });

  Films.insert({
    title: "Alien",
    year: "1979",
    userId: frank._id,
    author: frank.profile.name,
    director: "Ridley Scott",
    plot: "The commercial vessel Nostromo receives a distress call from an unexplored planet. After searching for survivors, the crew heads home only to realize that a deadly bioform has joined them",
    submitted: new Date(now - 3 * 3600 * 40)
  });

  Films.insert({
    title: "The Thing",
    year: "1982",
    userId: leo._id,
    author: leo.profile.name,
    director: "John Carpenter",
    plot: "Scientists in the Antarctic are confronted by a shape-shifting alien that assumes the appearance of the people it kills.",
    submitted: new Date(now - 3 * 3600 * 20)
  });
}
