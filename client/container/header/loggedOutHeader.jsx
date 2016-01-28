LoggedOutHeader = React.createClass({

	componentDidMount(){
		$(".button-collapse").sideNav({
            // closeOnClick: true
        });
        $('.modal-trigger').leanModal();
        $('.modal-trigger-signupCreate').leanModal();
    },

    closeModal(){
        $('.button-collapse').sideNav('hide');
    },

	render(){
		return (
		    <div>
                <div className="nav-wrapper">
                    <a href="/" className="navbar-brand right-on-mobile">LIST</a>
                    <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="mdi-navigation-menu grey-text text-darken-4"></i></a>
                    
                    <ul id="nav-main" className="right hide-on-med-and-down">
                        <li><a onClick={this.closeModal} href="#modalSignup" className="modal-trigger-signupCreate grey-text text-darken-1">Create List</a></li>
                        <li><a onClick={this.closeModal} className="modal-trigger grey-text text-darken-4" href="#modalLogin">Login</a> </li>
                    </ul>

                    <ul id="nav-mobile" className="side-nav">
                        <li id="profile-mobile" className="flex">
                            <div>
                                <a onClick={this.closeModal} href="#modalLogin" className="modal-trigger">LOGIN</a>
                            </div>
                        </li>
                        <li><a onClick={this.closeModal} className="modal-trigger-signupCreate grey-text text-darken-4" href="#modalSignup">Signup</a> </li>
                        <li className="divider"></li>
                        <li><a className="grey-text text-darken-1">Create List</a></li>
                        <li><a className="grey-text text-darken-1">My Lists</a> </li>
                        <li><a className="grey-text text-darken-1">Discover</a></li>
                        <li><a className="grey-text text-darken-1">Favorites</a></li>              
                    </ul>
                </div>

                

            </div>
        );
	}
})

                



