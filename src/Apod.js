import 'whatwg-fetch';
import React, { Component } from 'react';
import Container from './styledComponents/Container';
import Title from './styledComponents/Title';
import Image from './styledComponents/Image';
import Details from './styledComponents/Details';
import Card from './styledComponents/Card';
import Loader from './styledComponents/Loader';
import InputValue from './styledComponents/InputValue';
import ImageTitle from './styledComponents/ImageTitle';
import Copyright from './styledComponents/Copyright';
import iconLoader from './css/icon-loader.png';
import './css/widthRange.css';
import './css/materialize.css';

const apiKey = '6PGogqyJ3KWhZFbL4lbWZOa4BEEtAVnEMxYkoPat';
const url = "https://api.nasa.gov/planetary/apod";

class Apod extends Component {
	constructor() {
		super();
		this.state = {status:null,url:null,placeholder:null,width:500};
		this.getPicture = this.getPicture.bind(this);
		this.reset = this.reset.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	// Fetches picture using API, all the while updating component state to reflect stages
	getPicture() {
		var dateString = this.randomDate();
		this.setState({status:"load",url:null,placeholder:null,width:this.state.width,title:null,copy:null});
		fetch(url+"?api_key="+apiKey+"&date="+dateString)
			.then( (response) => {
				return response.json();
			}).then( (json) => {
				var url = (this.state.width >= 1000? json.hdurl:json.url);
				this.setState({status:"done",url:url,placeholder:json.explanation,title:json.title,copy:json.copyright});
			}).catch(function(ex) {
    			alert("Error: "+ex);
    			getPicture();
  			});
	}

	// State updating function for when the input slider is changed
	handleChange(event) {
    	this.setState({status:null,url:null,placeholder:null,width:event.target.value,title:null,copy:null});
 	}
 	// Revert the status of the component to the initial phase
	reset () {
		this.setState({status:null,url:null,placeholder:null,width:500,title:null,copy:null});
	}
	// This will generate a date string for a random day in the last 5 years, formatted "yyyy-mm-dd"
	randomDate() {
			var start = new Date(2012, 0, 1);
			var end = new Date();
		    var random = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
		    return random.getFullYear()+"-"+(random.getMonth()+1)+"-"+random.getDate();
	}

  render() {
  	// Lets create a variable card, that will conditionally render the elements in the card
  	let card = null;
  	switch(this.state.status) {
  		// WHile the rest Api is loading, display a spinning icon
  		case "load":
  			card = <Card>
  						<Loader src={iconLoader}/>
  					</Card>;
  			break;
  		// Image has been loaded, display image and the details
  		case "done":
  			card = <Card width={this.state.width}>
						<Image src={this.state.url} />
						<Details>
							<ImageTitle>{this.state.title}</ImageTitle>
							<Copyright>{this.state.copy}</Copyright>
							{this.state.placeholder}
						</Details>
						<a className="waves-effect waves-light btn-large" onClick={this.reset}><i className="material-icons right">call_missed</i>Back</a>
					</Card>;
  			break;
  		// Default and initial state, display buttton to initiate get
  		default:
  			card = <Card>
  						<InputValue>Width = {this.state.width}px {this.state.width >= 1000 ? <i className="material-icons right">hd</i>: null}</InputValue>
  						<input type="range" className="widthRange" min={250} value={this.state.width} max={1500}  onChange={this.handleChange}/>
  						<a className="waves-effect waves-light btn imButton" onClick={this.getPicture}><i className="material-icons right">perm_media</i>Random Image</a>
  					</Card>;
  			
  	}
  	

    return (
    	<Container>
      		<Title>Astronomy Picture of the Day</Title>
      		{card}
 		</Container>
      );
  }

}


export default Apod;
