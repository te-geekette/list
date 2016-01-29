Container = React.createClass({
    render() {
        return (
            <div>
                {this.props.header}
                {this.props.content}
                {this.props.footer}

                <LoginModal />
    			<SignupModal />
                <CreateListModal />
            </div>
        )
    }
});