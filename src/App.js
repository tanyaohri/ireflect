import React, {useEffect} from "react";
import {Navbar} from "./components/Navbar";
import { Loader } from "./components/Loader";
import {  Container } from "@material-ui/core";
import { getLocalStorageKey, setLocalStorageKey } from "./utils";
import { myTheme } from "./providers/constants";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { ImageListView } from "./components/imageList";
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

function App() {
  
  const { LIGHT, DARK } = myTheme.mode;
  
  useEffect(() => {
    setLocalStorageKey("theme", LIGHT);
  }, [])

  return (
    <ThemeProvider theme={getLocalStorageKey("theme")===LIGHT ? lightTheme : darkTheme }>
      <Container fixed>
        <Navbar />
        <Loader />      
      </Container>
      <ImageListView/>
    </ThemeProvider>     
  );
}

export default App;
