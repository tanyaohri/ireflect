import axios from "axios";
import React from "react";
import { data } from "../providers/staticData";
function convertThousandsToK(number) {
    if (number === undefined || number === null) {
        return "0"
    } else if (number < 1000) {
        return String(number)
    }
    else {
        return String(Math.round(number/1000))+"K"
    }
}


function getListOfImages(limit=10) {
    const apiRoot = "http://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    const final_api_call = `${apiRoot}/photos/random?client_id=${accessKey}&count=1${limit}`;
    //const final_api_call = "https://api.imgflip.com/get_memes";
    return new Promise((resolve, reject) => {
        axios.get(null).then((response) => {
            console.log(response)
            resolve(response)
        }).catch((err) => {
            reject(data)
        })
    }) 
       
}


function setLocalStorageKey(key, value) {
    if (localStorage) {
        localStorage.setItem(key, value)
    }
}
function getLocalStorageKey(key) {
    if (localStorage) {
        return localStorage.getItem(key)
    }
    else {
        return null;
    }
}

export {
    convertThousandsToK,
    getListOfImages,
    setLocalStorageKey,
    getLocalStorageKey

}