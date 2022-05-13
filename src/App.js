import React, {useState, useEffect} from "react";
import {Navbar} from "./components/Navbar";
import { Loader } from "./components/Loader";
import { UnsplashImage } from "./components/UnsplashImage";
//import { PrimarySearchAppBar } from './components/PrimarySearchAppBar';

import axios from 'axios';
import { data } from "./staticData";
import { ImageList, Grid } from "@material-ui/core";

//style


function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const apiRoot = "http://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    //const final_api_call = `${apiRoot}/photos/random?client_id=${accessKey}&count=10`;
    //const final_api_call = "https://api.imgflip.com/get_memes";
    axios
      .get(null)
      .then(res => 
        //setImages(res.data.data.memes)
        setImages(res.data)
      )
      .catch(err => {
        setImages(data)
      });
   }, [])


  useEffect(() => {
    console.log(images)
  }, [images])

  return (
    <div className="App">
      <Navbar />
      <Loader />      
      {/*<ImageList variant="masonry" sx={{ width: 500, height: 450 }} cols={6} gap={4} rowHeight={164}>
        {
          images.map(image => {  
            return <UnsplashImage url={image.urls.thumb} key={image.id} users={image.user.name} liked={image.likes} profile={image.small} />
          }
        )}
     
     </ImageList >
     */}
      <Grid container>
        {
          images.map(image => {  
            const { urls, id, user, likes } = image;
            const { profile_image, name, social } = user;
            return (
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <UnsplashImage
                  url={urls.thumb}
                  social_details={ social }
                  key={id} username={name}
                  liked={likes} profile_picture={profile_image.small}
                />
              </Grid>  
                )
          })
        }
      </Grid>
     
      
    </div>
  );
}

export default App;
