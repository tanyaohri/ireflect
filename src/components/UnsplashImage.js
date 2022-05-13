import React from 'react'
import styled from 'styled-components';
import { Card,Grid,Avatar, Box,CardActionArea, CardContent, CardMedia, ImageListItem, FormControlLabel, Link } from "@material-ui/core"

import { ReactComponent as ThumbsUpIcon } from "./../providers/icons/likesImage.svg";
import SvgIcon from "@material-ui/core/SvgIcon";

const Img = styled.img`
  width:100%;
  height: 100%;
  object-fit: cover;
`;

export const UnsplashImage = ({url, key , username, social_details, liked, profile_picture}) => {
 
  return (
    //<Img src={url} key={ key} alt=""/>
    <ImageListItem key={ key }>
   
      <Card style={{
        padding: 10}}>
        <CardMedia component="img" width={320} image={url} height={280} left={150} top={539}></CardMedia>

      <CardContent>
        <Grid container>
          <Grid item xs={10} sm={10} md={10} >
            <Grid container spacing={1}>
              <Grid xs={2} sm={2} md={2} >
                <Avatar alt="Remy Sharp" src={profile_picture} />
              </Grid>
              <Grid item xs={10} sm={10} md={10} >
                {username}
                <br></br>
                <a href={social_details.portfolio_url} target="_blank">{ social_details.instagram_username}</a>
              </Grid>
            </Grid> 
          </Grid>
          <Grid item xs={2} sm={2} md={2} >
            <SvgIcon viewBox='0 0 18 18'><ThumbsUpIcon /></SvgIcon>
            {liked}
          </Grid>
        </Grid>
      </CardContent >
      </Card>
    </ImageListItem>
  )
}
