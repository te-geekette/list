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
            return <LoggedInHeader userEmail={currentUser.emails[0].address} />; 
        } else {
            return <LoggedOutHeader />;
        }

    },

    render() {
        return (
            <div className="navbar-fixed">
                <nav className="grey darken-4">
                    {this.renderNavLinks()}
                </nav>
            </div>
        );
    }
});
