Home = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData(){
		return {
			currentUser: Meteor.user()
		}
	},

	renderTitleOrButton(){
		let { currentUser } = this.data;

		if(currentUser) {
			return <CreateButton />;
		} else {
			return <TitleUnit />;
		}
	},

    render() {
        return (
            <div>
            	{this.renderTitleOrButton()}
            	<div className='container'>
            		<h1> the lists </h1>
				</div>
            	
            </div>
        )
    }
});

// Home, Discover, Favorites and My Lists get their own componentens. 
// Each component then defines which list-cards it pulls (published, not-published, owner) and maps (use ListCard component)
// Except for Home (logged out), every component renders CreateButton 

