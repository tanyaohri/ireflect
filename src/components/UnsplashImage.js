import React from 'react'
import styled from 'styled-components';
import { Card,Grid, CardActionArea, CardContent, CardMedia } from "@material-ui/core"
const Img = styled.img`
  width:100%;
  height: 100%;
  object-fit: cover;
`;

export const UnsplashImage = ({url, key}) => {
  return (
    //<Img src={url} key={ key} alt=""/>
    <Card>
      <CardMedia component="img" width={300} image={url} height={230} ></CardMedia>

      <CardContent>
        <Grid container>
          <Grid item xs={10} sm={10} md={10}>My Name</Grid>
          <Grid item xs={2} sm={2} md={2}>Like Views </Grid>
        </Grid>
      </CardContent >
    </Card>
  )
}
