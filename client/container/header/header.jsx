Header = React.createClass({
    mixins: [ReactMeteorData],

    getMeteorData() {
      return {
          currentUser: Meteor.user()
      }
    },

    renderNavLinks(){
        let { currentUser } = this.data;

        if (currentUser) {
            return <LoggedInHeader username={currentUser.username} />; 
        } else {
            return <LoggedOutHeader />;
        }

    },

    render() {
        return (
            <div className="navbar-fixed">
                <nav className="white">
                    {this.renderNavLinks()}
                </nav>
            </div>
        );
    }
});
