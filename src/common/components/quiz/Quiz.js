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
import './_quiz.scss';

const styles = theme => ({
    grid: {
        padding: 10,
        width: 'auto',
        margin: 0
    },
    paper: {           
        flexWrap: 'wrap',
        padding: theme.spacing.unit / 2,
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
            <Paper className={'quiz ' + classes.paper} elevation={1}>
                <form>
                    <h1 className="title md-title txt-cntr">Question?</h1>
                    <blockquote className="blockquote">
                        <p>Question description</p>
                    </blockquote>
                    <div className="def-cntrl-margin">                        
                        <input type="text" placeholder="insert the answer" />                        
                    </div>
                    <div className="def-cntrl-margin">
                        <select className="select">
                            <option selected></option>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>                        
                    </div>
                    <div className="def-cntrl-margin">
                        <div>
                            <label className="input-container">                                
                                Option 1
                                <input name="opt" type="radio" value="option1" checked />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div>
                            <label className="input-container">                                
                                Option 2
                                <input name="opt" type="radio" value="option2" checked />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div>
                            <label className="input-container">                                
                                Option 3
                                <input name="opt" type="radio" value="option3" checked />
                                <span class="checkmark"></span>         
                            </label>
                        </div>
                    </div>
                </form>
            </Paper>		
		);
	}
}

Wizard.propTypes = {
	classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Wizard);

