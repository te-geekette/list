TitleUnit = React.createClass({

	componentDidMount(){
        $('.modal-trigger-signupTitle').leanModal();
    },

    render() {
        return (
            <div id="title-unit">
            	<div className="container row flex-web-only align-center" style={{ "height": 400 + "px"}}>
            		<div className="col m6">
            			<img src="/images/placeholder.png" />
            		</div>
            		<div className="col m6 flex flex-direct-column align-end">
            			<h1>Make a list</h1>
            			<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
            			<a className="btn modal-trigger-signupTitle waves-effect waves-light signature-color" href="#modalSignup">
            				Signup now
            				<i className="mdi-content-send right"></i> 
            			</a>
            		</div>
            	</div>
            </div>
        )
    }
});