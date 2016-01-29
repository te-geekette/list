CreateListModal = React.createClass({

	onSubmit(e){
		e.preventDefault();

        Meteor.call('createList', {
        	title: e.target.listTitle.value ? e.target.listTitle.value.trim() : null,
        	description: e.target.listDescription.value ? e.target.listDescription.value.trim() : null
        }, (error, result) => {
        	if(error){
        		console.log(error);
        	} else { 
        		this.clearForm(); 
        		$('#modalCreateList').closeModal();
        	}
        });

	},

    clearForm(){
        ReactDOM.findDOMNode(this.refs.listTitle).value = '';
        ReactDOM.findDOMNode(this.refs.listDescription).value = '';
    },

    handleCancel(){
        this.clearForm();
        $('#modalCreateList').closeModal();
    },

	render(){
		return(
			<div id="modalCreateList" className="modal card">
				<form onSubmit={this.onSubmit}>
					<div className="card-content" style={{"width": 90 + "%", "margin": "auto"}}>
						<div className="card-title">Create a list</div>
						<p style={{"marginTop": 20 + "px", "marginBottom": 20 + "px"}}> Here is room for a bit of explanation. And some more text.</p>
						<div>
							<label htmlFor="listTitle">Title</label>
							<input type="text" ref='listTitle' name='listTitle'/>
							
						</div>
						<div>
							<label htmlFor="listDescription">Description (optional) </label>
							<textarea ref='listDescription' name='listDescription' className="materialize-textarea"/>
							
						</div>
					</div>
					<div className="card-action flex justify-right">
						<button onClick={this.handleCancel} type="button" className="btn-flat">Cancel</button>
						<button type="submit" className="btn signature-button">Save</button>
					</div>
				</form>
			</div>
		);
	}
});