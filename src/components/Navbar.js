import React, { useEffect, useMemo } from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {  Button, FormControlLabel, Grid, SvgIcon, TextField } from '@material-ui/core';
import { Container, Switch, CssBaseline } from "@material-ui/core";
import styled from "styled-components";
import { myTheme } from '../providers/constants';
import { getLocalStorageKey, setLocalStorageKey } from '../utils';
import Autocomplete, { createFilterOptions } from "@material-ui/lab/Autocomplete";
import { ReactComponent as SearchIcon } from "./../providers/icons/search.svg";

const pages = ['Explore', 'Community', 'Collections'];

const useStyles = makeStyles((theme) => ({
  switch_track: {
    backgroundColor: "black",
},
switch_base: {
    color: "white",
    "&.Mui-disabled": {
        color: "white"
    },
    "&.Mui-checked": {
        color: "white"
    },
    "&.Mui-checked + .MuiSwitch-track": {
        backgroundColor: "grey",
  },
    
},
switch_primary: {
    "&.Mui-checked": {
        color: "#4CAF50",
    },
    "&.Mui-checked + .MuiSwitch-track": {
        backgroundColor: "#4CAF50",
    },
},
  root: {
    flexGrow: 1,
    display: "flex",
  },
 
  spaces: {
    marginLeft: theme.spacing(3),
    display: "flex",
  },
  searchBarStyles: {
    maxHeight: "43px",
    width: "419px",
    backgroundColor: "#FAFAFA",
    boxSizing: "border-box",
    
  },
 
}));
  
export const Navbar = () => {
  const classes = useStyles();
  const { LIGHT, DARK } = myTheme.mode;
  const [mode, setMode] = useState(LIGHT);

  function PageView(){
    return (
      <Grid container>
        <Grid item xs={5} sm={4} md={4}>
          <TextField 
            variant="standard"            
            InputProps={{
              style: {
                minWidth:300,
                maxHeight: "43px",
                backgroundColor: "#FAFAFA",
                boxSizing: "border-box",
                border: "1px solid #ECECEC",
                borderRadius:"4px"
              },
              disableUnderline: true, 
              startAdornment: <SvgIcon viewBox="-6 0 29 19"><SearchIcon></SearchIcon></SvgIcon>
            
            }}
            placeholder='search images here'></TextField>
          </Grid>
          <Grid item xs={1} sm={1} md={1}></Grid>
            {pages.map((page) => (
              <Grid item xs={0} sm={0} md={2}>
                <Typography style={{
                  marginTop: 8,

                }}>
                  {page}
                </Typography>
              </Grid>
            ))}
      </Grid>
    )
  }

  useEffect(() => {
    setMode(getLocalStorageKey("theme") || LIGHT)
  }, [])

  const temp = useMemo(() => {
    setLocalStorageKey("theme", mode);
  }, [mode])

  const handleThemeChange = (event) => {
    event.preventDefault()
    if (mode === DARK) 
      setMode(LIGHT)
    else 
      setMode(DARK)
    
  }

  return (
    <div className={classes.root}>
        <AppBar position="static" style={{
          color: 'black',
          backgroundColor: 'white', 
          boxShadow: 'none', 
        }}>
          <Container>
          <Toolbar disableGutters>
            <Grid container>
              <Grid item xs={8} sm={4} md={2}>
                <Typography
                  style={{
                    fontSize: "20px",
                    fontStyle: "oblique",
                  }}
                > Image Gallery </Typography>
              </Grid>
              <Grid item xs={0} sm={6} md={8}>
                <PageView />
              </Grid>
              <Grid item xs={4} sm={2} md={2}>
                {/* Theme toggler */}
                <Grid container>
                  <Grid item>
                    <Typography style={{marginTop:8}}>
                      { `${mode} Mode`}
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sm={2} md={2}>
                    <Switch 
                      //size="medium"
                    
                      //className={classes.toggle}                      
                      //checked={ mode === LIGHT}
                      //onClick={handleThemeChange}
                      classes={{
                        track: classes.switch_track,
                        switchBase: classes.switch_base,
                        colorPrimary: classes.switch_primary,
                      }}
                      checked={mode === LIGHT}
                      onClick={handleThemeChange}
                    />
                  </Grid>
                </Grid>
              </Grid> 
              </Grid>
             
              
              
              
              <CssBaseline />
            </Toolbar>
          </Container>
        </AppBar>
      </div>
  );
}