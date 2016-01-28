SignupModal = React.createClass({

    getInitialState(){
        return {
            error: 'hidden', 
            errorMessage: 'Something went wrong. Please try again.'
        }
    },    

    onSubmit(e) {
        e.preventDefault();
        let username = e.target.username.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        let passwordValidate = e.target.passwordValidate.value; 
        let that = this; 

        if (password === passwordValidate) {

            Accounts.createUser({email: email, password: password, username: username}, function(error){
        		if (error){
                    that.setState({error: ''}); 
        		} else {
                    that.clearSignupForm();
                    $('#modalSignup').closeModal();
        		    FlowRouter.go('Home');
                }
    	    }); 
        } else {
      	     that.setState({
                error: '',
                errorMessage: 'Your passwords do not match. Please try again.'
            }); 
        }
    },

    clearSignupForm(){
        ReactDOM.findDOMNode(this.refs.username).value = '';
        ReactDOM.findDOMNode(this.refs.email).value = '';
        ReactDOM.findDOMNode(this.refs.password).value = '';
        ReactDOM.findDOMNode(this.refs.passwordValidate).value = '';
    },

    handleCancel(){
        this.clearSignupForm();
        this.setState({error: 'hidden'}); 
        $('#modalSignup').closeModal();
    },

	render(){
		return (
            <div id="modalSignup" className="modal modal-fixed-footer">
                <form onSubmit={ this.onSubmit }>
                    <div className="modal-content">
                        <h5>Welcome to List</h5>
                    
                        <div>
                            <input type="text" id="account-username" className="validate" name="username" ref="username" placeholder="Set a username"/>
                            <input type="email" id="account-email" className="validate" name="email" ref="email" placeholder="Your email address"/>
                            <input type="password" id="account-password" className="validate" name="password" ref="password" placeholder="Set a password" />
                            <input type="password" id="account-password-validate" className="validate" name="passwordValidate" ref="passwordValidate" placeholder="Repeat your password" />
                        </div>
                    </div>

                    <div className="modal-footer flex justify-right align-center">
                        <p className={this.state.error}>{this.state.errorMessage}</p>
                        <a onClick={this.handleCancel} className="modal-action btn-flat cancel ">Cancel</a>
                        <button className='btn waves-effect waves-light light-grey' type="submit" id="create-account">
                            Create account
                            <i className="mdi-content-send right"></i>    
                        </button>                            
                    </div>                    
                </form>
            </div>
		);
	}
});