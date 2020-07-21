import React, { useEffect,useState } from "react"
import { useParams,Link } from "react-router-dom";
import TitleAlbum from "../components/TitleAlbum";
import Photos from "../components/Photos"


const SingleAlbum = () => {

    const {id} = useParams();

    const [singleAlbum,setSingleAlbum] = useState({});

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
        .then(response => response.json())
        // .then(json => console.log(json))
        .then(json => setSingleAlbum(json))
    },[])
    return (
        <>
        <Link className="back" to="/albums"><i class="fas fa-arrow-left"></i>Back</Link>
        <TitleAlbum title={singleAlbum.title}/>
        <Photos id={id}/>
        </>
    )
}

export default SingleAlbum;