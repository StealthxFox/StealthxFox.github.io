import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	
    img:{
    	maxHeight:'100%',
    	maxWidth:'100%',
    	margin:'auto',
    	display:'block',
    	position:'center,'
  	},
  	fullSection:{
		
	},
	Quote:{
		color:'#EDE7F6',
        fontWeight: 40,
     	fontSize: 16.5,
	},
	Source:{
		paddingTop:15,
		color:'#B388FF',
		fontSize:30,
	},
	Background:{
		paddingTop:5,
		color:'#14a37f',
		fontSize:13,
	}
});

function HomeTestimonialsCards(props) {
  const { classes } = props;
  return (
       	<div className={classes.fullSection}> 
			<Typography align='center' color='textPrimary' className={classes.Quote}>
				{props.Quote}
			</Typography>
			<Typography component='h1' variant='b2' align='right' color='textPrimary' className={classes.Source}>
				{props.Source}
			</Typography>
			<Typography component='h1'  align='right' color='textPrimary' className={classes.Background}>
				{props.Background}
			</Typography>
		</div>
    )
  }

HomeTestimonialsCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeTestimonialsCards);
