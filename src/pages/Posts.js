import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Post from "../components/Post"


const Posts = () => {
        const [posts,setPosts] = useState([])
    

        useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setPosts(json))
        // .then(json => console.log(json))
        },[])
    return (
        <>
            <Link className="back" to="/"><i class="fas fa-arrow-left"></i>Back</Link>
            <p className="content-para">Here you can see all posts</p>
            <div className="container-posts">
            {posts.map((post) => <Post id={post.id} userid={post.userId} key={post.id} title={post.title}/>)}
            </div>
        </>
    )
}
export default Posts;