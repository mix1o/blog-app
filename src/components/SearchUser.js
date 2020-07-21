import React, { useEffect, useState } from "react"
import Post from "./Post";
import Posts from "../pages/Posts";
import Album from "./Album";


const SearchUser = ({name,id,email}) => {

    const [userPosts,setUsersPosts] = useState([]);
    const [userAlbums,setUsersAlbums] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${id}`)
        .then(response => response.json())
        // .then(json => console.log(json))
        .then(json => setUsersPosts(json))
        
        fetch(`https://jsonplaceholder.typicode.com/albums/?userId=${id}`)
        .then(response => response.json())
        // .then(json => console.log(json))
        .then(json => setUsersAlbums(json))
    },[])


    return (   
        <>
        <p className="name-search-user">Posts and albums: <span>{name}</span></p>
        <div className="container-albums-posts">
            <div className="container-user-posts">
                <p className="pos-alb">Posts</p>
                {userPosts.map((post) => <Post id={post.id} userid={post.userId}  key={post.id} title={post.title}/>)}
            </div>
            <div className="container-user-albums">
                <p className="pos-alb">Albums</p>
                {userAlbums.map((album) => <Album id={album.id} userid={album.userId} key={album.id} title={album.title}/>)}
            </div>
        </div>
        </>
    )
}

export default SearchUser;