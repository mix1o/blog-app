import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import Photo from "./Photo";

const Photos = ({id}) => {

    const [photos,setPhotos] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=${id}`)
        .then(response => response.json())
        // .then(json => console.log(json))
        .then(json => setPhotos(json))
    },[])

    return (
        <div className="container-photos">
        {photos.map((photo) => <Photo id={photo.id} title={photo.title} key={photo.id} url={photo.url}/>)}
        </div>
    )
}

export default Photos;