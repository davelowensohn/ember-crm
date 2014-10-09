App.UserController = Ember.ObjectController.extend({

  someFunction: function() { alert('so functional') },

  someProperty: function() {
    if (this.get('model.firstName') == "Gregory") {
      return "Hey Gregory"
    } else {
      return "Hey, you're not Gregory"
    }
  }.property('model.firstName'),

  someObserver: function() {
    alert("You changed your name? I don't really see you as a " + this.get('model.firstName'));
  }.observes('model.firstName')

})