import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from "./Loader";

class App extends React.Component{
	state = {lat:null, errorMessage:''};

	componentDidMount(){//when the component is just mounted on the display
		console.log("The component is just mounted");
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({lat:position.coords.latitude}),
			(err) => this.setState({errorMessage:err.message})
		);
	}

	componentDidUpdate(){
		console.log("The component is just updated");
	}

	content(){
		//conditional rendering
		if(this.state.lat && !this.state.errorMessage)
			return(<SeasonDisplay lat={this.state.lat}/>);
		if(this.state.errorMessage && !this.state.lat)
			return(<div>Error:{this.state.errorMessage}</div>);
		else
			return (<Loader message="Please allow location access"/>);
	}

	render(){
		return(
		<React.Fragment>
			{this.content()}
		</React.Fragment>
		);
	}
}

ReactDOM.render(<App/>,document.querySelector("#root"));