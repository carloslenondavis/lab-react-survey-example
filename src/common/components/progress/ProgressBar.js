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
import './_progress.scss';

class ProgressBar extends Component {

	constructor(props){
        super(props);
        	    
		this.state = {};
	}

	render() {
		const { data, total } = this.props,
			stepWidth = 100 / total,
			prWidth = stepWidth * data.length;
		return (
            <div className="progress-bar">				
				<div className="bar">
					<div className="progress" style={{width: + prWidth + '%'}}></div>
				</div>
			</div>
		);
	}
}

ProgressBar.propTypes = {
	data: PropTypes.array.isRequired,
	total: PropTypes.number.isRequired
};
  
export default ProgressBar;

