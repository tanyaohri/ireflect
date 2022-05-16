import { Grid } from "@material-ui/core";
import React from "react";
import { getListOfImages } from "../utils";
import { ImageDialog } from "./imageDialog";
import { UnsplashImage } from "./UnsplashImage";





export const ImageListView = () => {
    const [images, setImages] = React.useState([]);
    const [clickedImage, setClickedImage] = React.useState(null);

    React.useEffect(() => {
        getListOfImages(10).then((res) => {
            setImages(res?.data || [])
        }).catch((err) => {
            setImages(err) // to change this laterwards as static data is thrown from promise
        })
    }, [])

    React.useEffect(() => {

    }, [images])

    return (
        <React.Fragment>
             <Grid container>
                {
                    images.map((image, ind) => {  
                        const { urls, id, user, likes } = image;
                        const { profile_image, name, social } = user;
                        return (
                            <Grid item xs={12} sm={6} md={3} lg={3}>
                                <UnsplashImage
                                    ind={ ind}
                                    setImage={setClickedImage}
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
            <ImageDialog
                imageDetails={images[clickedImage]}
                handleClose={() => setClickedImage(null)}
            />
        </React.Fragment>
    )
}

