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
import './_counter.scss';

class Counter extends Component {

	constructor(props){
        super(props);
        	    
		this.state = {};
	}

	render() {
		const { number } = this.props;
		return (
            <h1 className="counter x-xl-size">{number}</h1>			
		);
	}
}

Counter.propTypes = {
    number: PropTypes.number.isRequired
};
  
export default Counter;

