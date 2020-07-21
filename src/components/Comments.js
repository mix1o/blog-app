import React, { useState, useEffect } from 'react'
import Comment from "./Comment";
import { useParams } from 'react-router';

const Comments = ({id}) => {

    const [comments,setComments] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${id}`)
        .then(response => response.json())
        // .then(json => console.log(json))
        .then(json => setComments(json))
    })

    return (
        <div className="section-comments">       
         <p className="comments-p">Comments</p>
        {comments.map((com) => <Comment id={com.id} key={com.id} name={com.name}
        body={com.body} email={com.email} />)}
        </div>

    )
}

export default Comments;