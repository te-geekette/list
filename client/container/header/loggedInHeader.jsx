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
	            <a href="/" className="navbar-brand blue-text text-darken-2">List</a>
	            <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="mdi-navigation-menu"></i></a>

	            <ul id="nav-main" className="right hide-on-med-and-down">
	            	<li><a href="#">Create List</a></li>
	                <li>
	                    <a className="dropdown-button flex" href="#" data-activates="dropdown1">{this.props.userEmail}<i className="mdi-navigation-arrow-drop-down" /></a>
	                    <ul id="dropdown1" className="dropdown-content">
	                        <li><a href='#'>My Lists</a></li>
	                        <li><a href='#'>Discover</a></li>
	                        <li><a href='#'>Favorites</a></li>
	                        <li className="divider"></li>
	                        <li><a href='#'>Settings</a></li>
	                        <li><a href='/' onClick={this.handleLogout}>Log out</a></li>
	                    </ul>
	                </li>
	            </ul>

            	<ul id="nav-mobile" className="side-nav">
                    <li>
                        <div id="profile-mobile">
                            an image
                        </div>
                    </li>
                    <li><a className="disabled">Create List</a> </li>
                    <li><a className="disabled">My Lists</a> </li>
                    <li><a className="disabled">Discover</a></li>
                    <li><a className="disabled">Favorites</a></li>
                    <li className="divider"></li>
                    <li><a className="disabled">Settings</a> </li>
                    <li><a href='/' onClick={this.handleLogout}>Log out</a></li>
                </ul>
	        </div>
		);
	}
}); 

