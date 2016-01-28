LoginModal = React.createClass({

    getInitialState(){
        return {
            error: 'hidden', 
            errorMessage: 'Something went wrong. Please try again.'
        }
    },    

    onSubmit(e) {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
        let that = this; 

        Meteor.loginWithPassword(email, password, function(error) {
            if (error) {
                that.setState({error: ''});
            } else {
            	that.clearLoginForm();
            	$('#modalLogin').closeModal();
                FlowRouter.go('Home');
            }
        });
    },

    clearLoginForm(){
        ReactDOM.findDOMNode(this.refs.email).value = '';
        ReactDOM.findDOMNode(this.refs.password).value = '';
    },

    handleCancel(){
        this.clearLoginForm();
        this.setState({error: 'hidden'}); 
        $('#modalLogin').closeModal();
    },

	render(){
		return (
            <div id="modalLogin" className="modal modal-fixed-footer">
                <form onSubmit={ this.onSubmit }>
                    <div className="modal-content">
                        <h5>Welcome to List</h5>
                    
                        <div>
                            <input type="email" id="account-email" className="validate" name="email" ref="email" placeholder="Enter your email"/>
                            <input type="password" id="account-password" className="validate" name="password" ref="password" placeholder="Enter your password" />
                        	<a className="light-grey-text" onClick={this.handleCancel} href='#'>Forgot your password?</a>
                        </div>
                    </div>

                    <div className="modal-footer flex justify-right align-center">
                        <p className={this.state.error + " light-grey-text"}>{this.state.errorMessage}</p>
                        <a onClick={this.handleCancel} className="modal-action btn-flat cancel ">Cancel</a>
                        <button className='btn waves-effect waves-light light-grey' type="submit" id="create-account">
                            Login
                            <i className="mdi-content-send right"></i>    
                        </button>                            
                    </div>                    
                </form>
            </div>
		);
	}

}); 
