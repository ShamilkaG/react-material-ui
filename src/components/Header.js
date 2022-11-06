import {  Badge } from '@mui/material'
import { AppBar,  createTheme, Grid, IconButton, InputBase, Toolbar,makeStyles } from "@material-ui/core";
import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SearchIcon from '@mui/icons-material/Search';

const theme = createTheme();

// theme.spacing(2); // `${8 * 2}px` = '16px'

const useStyles = makeStyles ({
    root: {
        backgroundColor: '#fff',//Not working I put on Inline style(app bar)
        transform:'translateZ(0)'
        
    },
    searchInput: {
        opacity:'0.6',
        // padding:'0px 8px',
        padding:`0px ${theme.spacing(1)}`,
        fontSize:'0.8rem',
        '&:hover': {
            background: '#f2f2f2'
          },
        '& .MuiSvgIcon-root' : {
            // marginRight:'8px'
            marginRight: theme.spacing(1)
        }  
    },

    
})

export default function Header() {
    const classes = useStyles();

  return (
    <AppBar position='static' className={classes.root} >
        <Toolbar >
            <Grid container 
            alignItems='center'>
            {/* sm = {6} */}
                <Grid item  >
                    <InputBase
                    placeholder='Search topics'
                    className={classes.searchInput}
                    startAdornment = {<SearchIcon fontSize='small'/>}
                    ></InputBase>
                </Grid>
                <Grid item sm>

                </Grid>
                <Grid item  >
                    <IconButton>
                        <Badge badgeContent={4} color="secondary" >
                            <NotificationsNoneIcon fontSize='small'/>
                        </Badge>
                    </IconButton>

                    <IconButton>
                        <Badge badgeContent={4} color="primary">
                            <ChatBubbleOutlineIcon fontSize='small'/>
                        </Badge>
                    </IconButton>

                    <IconButton disableRipple={true}>
                        <PowerSettingsNewIcon fontSize='small'/>
                    </IconButton>
                    
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
