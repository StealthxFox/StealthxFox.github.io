import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
import Footer from './Footer';

import image from './Corgeek.jpg';
import image2 from './AnthonyLee.jpg';
import image3 from './SorahYang.jpg';
import PartnerCards from './PartnerCards';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
 icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: '10vh',
  },
  heroContent: {
    maxWidth: '60%',
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 4}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

  const tileData = [
    {
      img: image,
      title: 'Image',
      author: 'author',
    },

    {
      img: image2,
      title: 'Image',
      author: 'author',
    },
    
    {
      img: image,
      title: 'Image',
      author: 'author',
    },
    {
      img: image3,
      title: 'Image',
      author: 'author',
    },

    {
      img: image,
      title: 'Image',
      author: 'author',
    },
    
    {
      img: image,
      title: 'Image',
      author: 'author',
    },
    {
      img: image,
      title: 'Image',
      author: 'author',
    },
 ];

function Workshops(props) {
  const { classes } = props;
    console.log('start')
    console.log('New Test with NavBar')
    console.log(process.env.PUBLIC_URL)
    console.log('end')
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar/>
        <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Partners
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
                Something short and leading about the collection below—its contents, the creator, etc.
                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                entirely.
            </Typography>
            
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Find One Near You
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Contact Us
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
     
        {/* End hero unit */}   
        <PartnerCards/>
      </main>
      <Footer/>
    </React.Fragment>
  );
}

Workshops.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Workshops);