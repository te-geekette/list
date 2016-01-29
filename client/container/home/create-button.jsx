CreateButton = React.createClass({

	componentDidMount(){
		$('.modal-trigger-createList').leanModal();
	},
	
	render(){
		return (
			<div className=" fixed-action-btn">
	    		<a className="btn-floating modal-trigger-createList btn-large signature-button" href="#modalCreateList">
	      			<span className="mdi-2x mdi-content-add"></span>
	    		</a>
	    	</div>
	    );
	}
});