import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom'
import Selectors from './Selector'
import Style from '../style'

export default function ButtonAppBar(props) {
const classes = Style();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={classes.bar} position="static" component="nav">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/" className= {classes.head}><h1 className={classes.heading}>iDesign.Market</h1> </Link>  
          </Typography> 
          {props.Selectors && <><Selectors labels='filter'/><Selectors labels = 'Sort' label1 = 'rating' label2='discount' label3='price'/></>}
          <Button color="inherit">
                <a href={props.link} className= {classes.link}>{props.title}</a>  
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
