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
import { Paper, withStyles, List, ListItem, ListItemText, Avatar, Grow, Zoom, Fade } from '@material-ui/core';
import './_quiz.scss';

const styles = theme => ({
    paper: {           
        flexWrap: 'wrap',
        padding: theme.spacing.unit / 2,
    },
});

class Quiz extends Component {

	constructor(props){
        super(props);
        	    
        this.state = {};
    }

    getType = (_type, data, handleChange, answer) => {        
        switch (_type) {
            case 'Question':
                return <Grow in={true} style={{ transitionDelay: true ? 300 : 50 }}>
                    <div className="def-cntrl-margin">                        
                        <input 
                            type="text" 
                            placeholder="insert the answer" 
                            value={answer} 
                            onChange={handleChange} />                        
                    </div>
                </Grow>;
            case 'Selection':
                return <Grow in={true} style={{ transitionDelay: true ? 300 : 50 }}>
                    <div className="def-cntrl-margin">
                        <select 
                            className="select" 
                            value={answer}
                            onChange={handleChange}>
                            <option defaultValue=""></option>
                            {
                                data.options.map((opt) => <option key={opt} value={opt}>{opt}</option> )
                            }
                        </select>                        
                    </div>
                </Grow>;
            case 'One Selection':
                return  <div className="def-cntrl-margin">
                    {
                        data.options.map((opt) => 
                            <Zoom in={true} style={{ transitionDelay: true ? 300 : 50 }} key={opt}>
                                <div>
                                    <label className="input-container">                                
                                        {opt}
                                        <input 
                                            name="opt" 
                                            type="radio" 
                                            value={opt} 
                                            checked={answer === opt ? true : false}
                                            onChange={handleChange} />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </Zoom>
                        )
                    }
                </div>
            case 'Summary':
                return  <List component="nav">
                    {
                        this.props.summary.map((item) =>
                            <Zoom in={true} style={{ transitionDelay: true ? 300 : 50 }} key={item.question}>
                                 <ListItem button>
                                    <Avatar>
                                        {item.id}
                                    </Avatar>
                                    <ListItemText primary={item.question} secondary={item.answer} />
                                </ListItem>
                            </Zoom>                           
                        )
                    }                    
                </List>
            default:
                break;
        }
    }

	render() {
		const { classes, data, handleChange, answer } = this.props;
		return (
            <Fade in={true} style={{ transitionDelay: true ? 300 : 50 }}>
                <Paper className={'quiz ' + classes.paper} elevation={1}>
                    <form>
                        <h1 className="title md-title txt-cntr">{data.type}</h1>
                        <blockquote className="blockquote">
                            <p className="header">{data.question}</p>
                            <p className="sub-header">{data.description}</p>
                        </blockquote>
                        { this.getType(data.type, data, handleChange, answer) }
                    </form>
                </Paper>
            </Fade>            	
		);
	}
}

Quiz.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,    
    handleChange: PropTypes.func.isRequired,
    answer: PropTypes.string.isRequired,
    summary: PropTypes.array,
};
  
export default withStyles(styles)(Quiz);

