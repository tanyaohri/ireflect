import React from "react";
import {
    Dialog,
    DialogContent,
    DialogActions,
    DialogTitle,
    Button,
    Box,
    ButtonBase,
    Grid,
    CardMedia,
    CardContent,
    Backdrop,
    IconButton,
    Paper,
    makeStyles,
    Avatar
} from "@material-ui/core"
import SvgIcon from "@material-ui/core/SvgIcon";

import { ReactComponent as CloseIcon } from "./../providers/icons/Cross.svg";
import { ReactComponent as ThumbsUpIcon } from "./../providers/icons/likesImage.svg";
import { ReactComponent as ShareIcon } from "./../providers/icons/share.svg";
import { ReactComponent as InfoIcon } from "./../providers/icons/info.svg";




const useStyles = makeStyles({


    downloadImgBtn: {
        top:-54,
        textTransform:"none",
        borderRadius: "4px",
        width: "157px",
        height: "39px",
        background: "#3CB46E",
        fontWeight: "700",
        fontSize: "10px",
        lineHeight: "12.19px",
        letterSpacing: "-0.02em",
        right:"22px",
        color: "#FFFFFF",
        "&:hover": {
            backgroundColor: "#3CB46E"
        }
        
    },
    ImgStyle: {
        objectFit: "cover",
        //borderRadius: "15.9662px 15.9662px 0px 0px",
    },
    
    closeStyle: {
        position:"absolute",
        backgroundColor: "#FFFFFF",
        width: "38px",
        height: "38px",
        top: "-6px",
        left: "240px",
        
    },
    imageWrap: {
        display: "inline-block",
        position: "relative"
    },
    imgButton: {
        top:-40,
        left: 25.82,
        height: "10%",
        width:"10%",
        maxWidth: "44px",
        maxHeight: "23px",
        fontSize: "10px",
        textTransform:"none",
        lineHeight: "1px",
        alignContent: "center",
        border:"1px solid #ECECEC",
        color:"#ECECEC",
        backgroundColor: "transparent",
        margin: "3px",
        "&:hover": {
            backgroundColor: "transparent"
        }

    },
    like: {
        marginTop: "10px",
        marginBottom: "10px",
        paddingTop:"5px",
      },
    avtarStyle: {
        width: "56px",
        height: "56px",
        left: "27px",
        top: "509px",
    },
    linkStyle: {
        textDecoration: 'none',
        font:"poppins",
        fontStyle: 'italic',
        fontWeight: 600,
        fontSize:"10px",
        color: '#A7A7A7',
      },


})


export const ImageDialog = ({
    imageDetails = null,
    handleClose
}) => {

    const classes = useStyles();

    return (
        <Dialog 
            open={ imageDetails!==null}
        >
            
          
            {/*<DialogActions className={classes.closeStyle}>
                <Button onClick={handleClose}>
                <SvgIcon> <CloseIcon /></SvgIcon>
                </Button>
            </DialogActions>*/}
            {
                imageDetails !== null && (   
                    <React.Fragment>
                        <Paper className={classes.imageWrap} variant="outlined">
                            <img
                                style={{
                                    maxWidth: "100%",
                                    minWidth:"388px",
                                    height: "auto",
                                    maxHeight:"400px"
                                }}
                                src={imageDetails?.urls?.full}
                            />
                            <IconButton
                                variant="contained"
                                style={{
                                    background: "white",
                                    maxHeight: 20,
                                    maxWidth: 20,
                                    position: "absolute",
                                    top: 0,
                                    right: 0,
                                }}
                                
                                onClick={handleClose}
                            >
                                <SvgIcon viewBox="-6 1 24 12"> <CloseIcon /></SvgIcon>
                            </IconButton>
                            <Grid container>
                                <Grid item xs={9} sm={9} md={9} lg={9}>
                                <Button
                                        className={classes.imgButton}
                                        variant="contained"
                                        startIcon={<SvgIcon viewBox={ "0 -3 10 18"}><ShareIcon/></SvgIcon>}
                                >
                                    Share
                                </Button>
                                    <Button
                                        startIcon={<SvgIcon viewBox={"0 -3 10 18"}><InfoIcon/></SvgIcon>}
                                className={classes.imgButton}
                                variant="contained">
                                Info
                              </Button>

                                </Grid>

                                <Grid item xs={3} md={3} lg={3}>
                                <Button
                                className={classes.downloadImgBtn}
                                variant="contained">
                                Download Image
                                    </Button>
                                </Grid>
                                
                            </Grid>
                            

            <Grid container >
            <Grid item xs={7} sm={7} md={7}>
              <Grid container >
                <Grid xs={2} sm={2} md={2} className={classes.avtarStyle}>
                  <Avatar alt="Remy Sharp" src={imageDetails?.user?.profile_image?.small} />
                </Grid>
                <Grid item xs={9} sm={9} md={9}  >
                  <Grid container>
                    <Grid item xs={9} sm={9} md={9}>
                      {imageDetails?.user?.name}
                    </Grid>
                    <Grid item xs={9} sm={ 9} md={ 9}>
                      <a
                        className={classes.linkStyle}
                        href={imageDetails?.user?.social?.portfolio_url}
                        target="_blank">
                        @{imageDetails?.user?.social?.instagram_username}
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid> 
                                </Grid>
            <Grid item xs={3} sm={3} md={3} className={classes.like}> 
                  {imageDetails?.downloads} Downloads
              </Grid> 

            <Grid item xs={2} sm={2} md={2} className={classes.like}>
              <Grid container spacing={1}>
                <SvgIcon viewBox='0 0 18 18'><ThumbsUpIcon /></SvgIcon>
                <Grid xs={2} sm={2} md={2} >
                  {imageDetails?.likes}
                </Grid>
              </Grid>
            </Grid>  
          </Grid>
                            
                        </Paper>
                       
                        {/*<Box
                            component="img"
                            sx={{
                            height: 600,
                            width: 900,
                            minWidth: { xs: 200, md: 900 },
                            minHeight: { xs: 340, md: 600 },
                            maxHeight: { xs: 200, md: 600 },
                            maxWidth: { xs: 340, md: 900 },
                            }}
                            alt="The house from the offer."
                            src={imageDetails?.urls?.full}
                        />      */}
                    </React.Fragment>
                    
                )
            }
            
        </Dialog>
    )
}