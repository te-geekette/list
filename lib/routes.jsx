// ROUTES // 

FlowRouter.route('/', {
	name: "Home",
	action(){
		renderLayoutWith(<Home />)
	}
});

// HELPERS //

function renderLayoutWith (component) {
	ReactLayout.render(Container, {
		header: <Header />,
		content: component,
		footer: <Footer />
	});
}