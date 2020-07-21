import React, { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'
import Users from "./Users"

const Post = ({title,id,userid}) => {


    return (
        <div className="container-post">
            <p className="title-post">{title}</p>
            <Users userid={userid}/>
            <Link className="see-more" to={`/posts/${id}`}>See more <i class="fas fa-arrow-right"></i></Link>
        </div>
    )
}
export default Post;