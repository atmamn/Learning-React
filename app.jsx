const JSX = () => {
	return (
		<div>
			<h1>Hello World</h1>
			<p>I'm learning React!</p>
		</div>
	)
};

class Fruits extends React.Component {
	constructor(props) {
	  super(props);
	}
	render () {
		return (
			<JSX />
		) 
	}
}