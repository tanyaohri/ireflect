import React, {useState, useEffect} from "react";
import { Heading } from "./components/Heading";
import { Loader } from "./components/Loader";
import { UnsplashImage } from "./components/UnsplashImage";


import axios from 'axios';
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import { data } from "./staticData";

//style

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family : sans-serif;
}
`;

const WrapperImage = styled.section`
max-width: 70rem;
margin: 4rem auto;
display: grid;
grid-gap: 1em;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
grid-auto-rows: 300px;
`;


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
      <Heading />
      <GlobalStyle/>
      <Loader />
      <WrapperImage>
        
  
        {
          images.map(image => {
            
            
            return <UnsplashImage url={image.urls.thumb} key={ image.id }/>
            //return <UnsplashImage url={image.url} key={image.id} />
          }
      )}
      </WrapperImage>
     
      
    </div>
  );
}

export default App;
