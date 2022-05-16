import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { ReactComponent as SearchIcon } from "./../providers/icons/search.svg";
import {
  Box, Button, FormControlLabel, Grid, SvgIcon, TextField, CardMedia, Paper
} from '@material-ui/core';


export const Loader = (ind,url,setImage) => {
  return (
      <React.Fragment>
         <Grid container>
        
          <Box>
          {/*<CardMedia onClick={() => setImage(ind)} component="img" fullwidth />*/}
          <img fullwidth component="img" style={{
            left:"-59px",position: "relative", width: "119%", height:"300px",objectFit:"cover"}}  src="https://wonderfulengineering.com/wp-content/uploads/2014/10/wallpaper-photos-31.jpg" />
            <TextField 
            variant="standard"            
            InputProps={{
              style: {
                float: "center",
                marginTop: "-30%",
                marginLeft: "60px",
                minWidth:600,
                maxHeight: "43px",
                backgroundColor: "#FAFAFA",
                boxSizing: "border-box",
                border: "1px solid #ECECEC",
                borderRadius: "4px",
                alignItems:"center",
              },
              disableUnderline: true, 
              startAdornment: <SvgIcon viewBox="-6 0 29 19"><SearchIcon></SearchIcon></SvgIcon>
            
            }}
              placeholder='search images here'></TextField>
        </Box>
        </Grid>
        </React.Fragment>
   
  )
}
