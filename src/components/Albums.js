import React, { useState, useEffect } from 'react'
import Album from "./Album"
import {Link} from "react-router-dom"


const Albums = () => {
    
    const [albums,setAlbums] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response => response.json())
        // .then(json => console.log(json))
        .then(json => setAlbums(json))
    },[])
    
    return (
        <>
            <Link className="back" to="/"><i class="fas fa-arrow-left"></i>Back</Link>
            <p className="content-para">Here you can see all albums</p>
            <div className="container-posts">
            {albums.map((album) => <Album id={album.id} key={album.id} userid={album.userId} title={album.title}/>)}
            </div>
         </> 
    )
}

export default Albums;