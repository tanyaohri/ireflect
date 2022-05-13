import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Container, Switch, CssBaseline } from "@material-ui/core";
import styled from "styled-components";




const darkTheme = createTheme({
  palette: {
    type: "dark",
    background: {
      default: "hsl(230, 17%, 14%)"
    }
  }
});

const lightTheme = createTheme({
  palette: {
    type: "light",
    background: {
      default: "hsl(0, 0%, 100%)"
    }
  }
});



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  navlinks: {
    marginLeft: theme.spacing(70),
    display: "flex",
  },
  spaces: {
    padding: 20,
    display: "grid",
  }
}));
  
export const Navbar= () => {
  const classes = useStyles();

  const [mode, setMode] = useState("light");

  const selectedTheme = mode === "dark" ? darkTheme : lightTheme;

  return (
<ThemeProvider theme={selectedTheme}>
    <div className={classes.root}>
        <AppBar position="static" style={{
          color: 'black',
          backgroundColor: 'white', 
          boxShadow: 'none', 
        }}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" >
            Image Gallery
          </Typography>
          <Typography  className={classes.navlinks}>
            Explore
          </Typography>
          <Typography className={classes.spaces}>
            collections
          </Typography>
          <Typography>
            Community
          </Typography>
          <Typography className={classes.spaces}>
          <h4>Dark Mode</h4>
      <Container maxWidth="sm">
        <Switch onChange={() => setMode(mode === "light" ? "dark" : "light")} />
              </Container>
              <CssBaseline />
    
                  </Typography>
                </Toolbar>
        </AppBar>
      </div>
      </ThemeProvider>
  );
}