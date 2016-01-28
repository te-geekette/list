LoggedOutHeader = React.createClass({

	componentDidMount(){
		$(".button-collapse").sideNav({
            closeOnClick: true
        });
        $('.modal-trigger').leanModal();
        $('.modal-trigger-signupCreate').leanModal();
    },

	render(){
		return (
		    <div>
                <div className="nav-wrapper">
                    <a href="/" className="navbar-brand blue-text text-darken-2">List</a>
                    <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
                    
                    <ul id="nav-main" className="right hide-on-med-and-down">
                        <li><a href="#modalSignup" className="modal-trigger-signupCreate">Create List</a></li>
                        <li><a className="modal-trigger" href="#modalLogin">Login</a> </li>
                    </ul>

                    <ul id="nav-mobile" className="side-nav">
                        <li>
                            <div id="profile-mobile">
                                <a href="#modalLogin" className="modal-trigger">Login</a>
                            </div>
                        </li>
                        <li><a className="modal-trigger-signupCreate" href="#modalSignup">Signup</a> </li>
                        <li className="divider"></li>
                        <li><a className="disabled">Create List</a> </li>
                        <li><a className="disabled">My Lists</a> </li>
                        <li><a className="disabled">Discover</a></li>
                        <li><a className="disabled">Favorites</a></li>              
                    </ul>
                </div>

                

            </div>
        );
	}
})

                



