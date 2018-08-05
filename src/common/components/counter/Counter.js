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
import { Grid, Paper, withStyles } from '@material-ui/core';
import './_counter.scss';

const styles = theme => ({
    grid: {
        padding: 10,
        width: 'auto',
        margin: 0
    },
    paper: {           
        flexWrap: 'wrap',
        padding: theme.spacing.unit / 2,
        marginTop: '3%'
    },
});

class Counter extends Component {

	constructor(props){
        super(props);
        	    
		this.state = {};
	}

	render() {
		const { classes } = this.props;
		return (
            <h1 className="counter x-xl-size">1</h1>			
		);
	}
}

Counter.propTypes = {
	classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Counter);

