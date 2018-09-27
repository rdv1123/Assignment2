import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    toolbarButtons: {
      marginLeft: 'auto',
      marginRight: -12,
    },
  };

const NavBar = ({ classes }) => {

    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <IconButton className={classes.menuButton} aria-label="Menu" color="inherit">
                    <MenuIcon />
                </IconButton>
                {' '}
                <Typography variant="title" color="inherit">
                UF Directory App
                </Typography>
                <section className={classes.toolbarButtons}>
                    <Button
                        variant="raised"
                        color="default"
                        //className={classes.Button}
                        //label={this.state.buttonLabel}
                        //onClick={this.handleClick}
                    >
                    Add Listing
                    </Button>
                    {' '}
                    <Button
                        variant="raised"
                        color="secondary"
                        //className={classes.Button}
                        //label={this.state.buttonLabel}
                        //onClick={this.handleClick}
                    >
                    Delete Listing
                    </Button>
                    <IconButton color="inherit" aria-label="More Options">
                        <MoreVertIcon />
                    </IconButton>
                </section>   
            </Toolbar>  
        </AppBar>
        </div>
    )
}

export default withStyles(styles)(NavBar);