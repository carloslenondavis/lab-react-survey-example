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
import Quiz from './../quiz/Quiz';
import Counter from './../counter/Counter';

const styles = theme => ({
    grid: {
        padding: 10,
        width: 'auto',
        margin: 0,
        marginTop: '3%'
    },
});

class Wizard extends Component {

	constructor(props){
        super(props);
        	    
		this.state = {};
	}

	render() {
		const { classes } = this.props;
		return (
            <Grid container justify="center" spacing={0} className={classes.grid}>
                <Grid item xs={10} sm={8} md={6} lg={6}>
                    <Grid container justify="center" spacing={0}>
                        <Grid item xs={12} sm={2} md={2} lg={2} className="align-vrt-midl">
                            <Counter />
                        </Grid>
                        <Grid item xs={12} sm={10} md={10} lg={10}>
                            <Quiz />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>			
		);
	}
}

Wizard.propTypes = {
	classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Wizard);

