if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    
    // code to run on server at startup
    if (Posts.find().count() === 0) {
      Posts.insert({
        title: 'Introducing Telescope',
        url: 'http://sachagreif.com/introducing-telescope/'
      });
    
      Posts.insert({
        title: 'Meteor',
        url: 'http://meteor.com'
      });
    
      Posts.insert({
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com'
      });
    }
  });
}
