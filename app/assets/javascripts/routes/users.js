App.UsersRoute = Ember.Route.extend({

	model: function() { this.store.find('user')},
	
	beforeModel: function(transition) { },

	model: function(params, transition) { },

	afterModel: function(model, transition) { },

	activate: function() { },

	setupController: function(controller, model) {
		controller.set('model', model)
	    // or this._super(arguments...)
    },

	deactivate: function() { }

})