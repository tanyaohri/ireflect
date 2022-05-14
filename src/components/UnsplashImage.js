import React, {useState} from 'react'
import styled from 'styled-components';
import {
  Card, Grid, Avatar
  , Box, CardActionArea, CardContent, CardMedia,
  ImageListItem, Dialog, FormControlLabel, Link
} from "@material-ui/core";

import { makeStyles} from "@material-ui/core"






import { ReactComponent as ThumbsUpIcon } from "./../providers/icons/likesImage.svg";
import SvgIcon from "@material-ui/core/SvgIcon";

const Img = styled.img`
  width:100%;
  height: 100%;
  object-fit: cover;
`;


const useStyles = makeStyles({
  body: {
    maxHeight: "67px",
    top: "498px",
    left: "862px",
    padding: "0px, 16px, 0px, 0px",
    justifyContent: "space-between",
    gap: "72px",
    backgroundColor: "#FFFFFF",
  },
  like: {
    marginTop: "10px",
    marginBottom: "10px",
    paddingTop:"5px",
  },
  cardBoundary: {
    borderRadius: "8px 8px 8px 8px",
    margin: "10px",
  },
  linkStyle: {
    textDecoration: 'none',
    font:"poppins",
    fontStyle: 'italic',
    fontWeight: 600,
    fontSize:"10px",
    color: '#A7A7A7',
  },
  avtarStyle: {
    width: "56px",
    height: "56px",
    left: "27px",
    top: "509px",
  },

})





export const UnsplashImage = ({
  ind,
  url, key,
  username,
  social_details,
  liked, profile_picture,
  setImage
}) => {
  const classes = useStyles();
  return (
      <Card className={classes.cardBoundary}>
        <CardMedia onClick={() => setImage(ind)} component="img" width={428} image={url} height={243.35} />
        <CardContent className={classes.body}>
          <Grid container >
            <Grid item xs={10} sm={10} md={10}>
              <Grid container >
                <Grid xs={3} sm={3} md={3} className={classes.avtarStyle}>
                  <Avatar alt="Remy Sharp" src={profile_picture} />
                </Grid>
                <Grid item xs={9} sm={9} md={9}  >
                  <Grid container>
                    <Grid item xs={12} sm={ 12} md={ 12}>
                      {username}
                    </Grid>
                    <Grid item xs={12} sm={ 12} md={ 12}>
                      <a
                        className={classes.linkStyle}
                        href={social_details.portfolio_url}
                        target="_blank">
                        @{social_details.instagram_username}
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={2} sm={2} md={2} className={classes.like}>
              <Grid container spacing={1}>
                <SvgIcon viewBox='0 0 18 18'><ThumbsUpIcon /></SvgIcon>
                <Grid xs={2} sm={2} md={2} >
                  {liked}
                </Grid>
              </Grid>
            </Grid>  
          </Grid>
        </CardContent >
      </Card>  
  )
}
