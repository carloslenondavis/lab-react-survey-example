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

class Wizard extends Component {

	constructor(props){
        super(props);
        	    
		this.state = {};
	}

	render() {

		const { classes } = this.props;
		return (
            <Grid container justify="center" spacing={0}>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                    <Paper className={classes.paper} elevation={1}>                        
                    </Paper>
                </Grid>
            </Grid>			
		);
	}
}

Wizard.propTypes = {
	classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Wizard);

