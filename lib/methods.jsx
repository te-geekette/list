Meteor.methods({
	createList(event){

		let listId = Lists.insert({
			title: event.title,
			description: event.description,
			published: false,
			owner: Meteor.userId(),
			createdOn: new Date()
		});
		return listId;  
	}
});