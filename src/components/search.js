
import React, { Component } from 'react'
import Helpers from './utils/helpers.js';

class Search extends React.Component{
	constructor(){
		super();

		this.state = {
			subject: "",
			startDate: "",
			endDate: ""
		}
	}

	handleChange = event => {
		this.setState({
			[event.target.id] : event.target.value
		});
	}


}