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
import { AppBar, Toolbar, Typography, withStyles, Avatar, Fade } from '@material-ui/core';

const styles = {	
	flex: {
		flex: 1
	},
	appBar: {
		background: '#272644'
	}
};

class Header extends Component {

	constructor(props){
        super(props);
        	    
		this.state = {};
	}

	render() {

		const { classes, appName } = this.props;
		return (
			<div>
				<Fade in={true} style={{ transitionDelay: true ? 300 : 50 }}>
					<AppBar position="static" className={classes.appBar}>
						<Toolbar>						
							<Typography variant="title" color="inherit" className={classes.flex}>
								{appName}
							</Typography>
							<Avatar alt="Carlos Lenon" src="https://avatars0.githubusercontent.com/u/4239218?s=460&v=4" className={classes.avatar} />
						</Toolbar>
					</AppBar>
				</Fade>				
			</div>
		);
	}
}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
	appName: PropTypes.string.isRequired
};
  
export default withStyles(styles)(Header);

