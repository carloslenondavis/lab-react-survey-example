/**
 * Class Header
 * @class Header
 * @classdesc Represent the map component
 * @extends Component
 * @author clenon <code@carloslenon.com>
 * 
 */
//core dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Zoom } from '@material-ui/core';
import './_counter.scss';

class Counter extends Component {

	constructor(props){
        super(props);
        	    
		this.state = {};
	}

	render() {
		const { number } = this.props;
		return (
			<Zoom in={true} style={{ transitionDelay: true ? 300 : 50 }}>
				<h1 className="counter x-xl-size">{number}</h1>
			</Zoom>			
		);
	}
}

Counter.propTypes = {
    number: PropTypes.number.isRequired
};
  
export default Counter;

