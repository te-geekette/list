LoggedInHeader = React.createClass({

	componentDidMount(){
        $(".dropdown-button").dropdown({ hover: false });
		$(".button-collapse").sideNav({
            closeOnClick: true
        });
        $('.collapsible').collapsible();
    },

    handleLogout() {
        Meteor.logout();
    },

    render(){
		return (
	        <div className="nav-wrapper">
	            <a href="/" className="navbar-brand right-on-mobile">LIST</a>
	            <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="mdi-navigation-menu grey-text text-darken-4"></i></a>

	            <ul id="nav-main" className="right hide-on-med-and-down">
	            	<li><a href="#" className="grey-text text-darken-4">Create List</a></li>
	                <li id="profile-web">
	                    <a className="dropdown-button flex grey-text text-darken-4" href="#" data-activates="dropdown1">
	                    	<div><i className="mdi-action-perm-identity"></i></div>
	                    	{this.props.username}
	                    	<i className="mdi-navigation-arrow-drop-down" />
	                    </a>
	                    <ul id="dropdown1" className="dropdown-content">
	                        <li><a className="grey-text text-darken-4" href='#'>My Lists</a></li>
	                        <li><a className="grey-text text-darken-4" href='#'>Discover</a></li>
	                        <li><a className="grey-text text-darken-4" href='#'>Favorites</a></li>
	                        <li className="divider"></li>
	                        <li><a className="grey-text text-darken-2" href='#'>Settings</a></li>
	                        <li><a className="grey-text text-darken-2" href='/' onClick={this.handleLogout}>Log out</a></li>
	                    </ul>
	                </li>
	            </ul>

            	<ul id="nav-mobile" className="side-nav">
                    <li id="profile-mobile" className="flex">
                        <div>
                            <i className="mdi-action-perm-identity mdi-2x"></i>
                        </div>
                    </li>
                    <li><a className="grey-text text-darken-4">Create List</a> </li>
                    <li><a className="grey-text text-darken-4">My Lists</a> </li>
                    <li><a className="grey-text text-darken-4">Discover</a></li>
                    <li><a className="grey-text text-darken-4">Favorites</a></li>
                    <li className="divider"></li>
                    <li><a className="grey-text text-darken-2">Settings</a> </li>
                    <li><a className="grey-text text-darken-2" href='/' onClick={this.handleLogout}>Log out</a></li>
                </ul>
	        </div>
		);
	}
}); 
