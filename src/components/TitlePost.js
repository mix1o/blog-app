import React from 'react'


const TitlePost = ({title,id,body}) => {
    return (
        <div className="single-post-content">
        
        <p className="single-post-title">{title}</p>
        <p className="single-post-body">{body}</p>
        </div>
    )
}

export default TitlePost;