Meteor.publish('lists', function(){
	return Lists.find({});
});

Meteor.publish('links', function(){
	return Links.find({});
})