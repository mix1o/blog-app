import React,{useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom';
import TitlePost from "../components/TitlePost";
import Comments from '../components/Comments';
import Users from "../components/Users"

const SinglePost = () => {


    const {id} = useParams();

    const [singlePost,setSinglePost] = useState({});

      useEffect(()=>{
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then(response => response.json())
          .then(json => setSinglePost(json));
        // .then(json => console.log(json))
      },[])    

    return (
      <div className="single-post">
        <Link className="back-2" to="/posts"><i class="fas fa-arrow-left"></i>Back</Link>
        <Users userid={singlePost.userId}/>
        <TitlePost title={singlePost.title} body={singlePost.body} id={singlePost.id}/>
        <Comments id={id}/>
        
      </div>
    )
}

export default SinglePost;