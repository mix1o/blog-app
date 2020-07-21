import React from 'react'

const Comment = ({name,body,email}) => {

    return (
        <div className="comments">
        <p className="email-com">{email}</p>
    <p className="name-com">{name}{body}</p>
        </div>
    )
}
export default Comment;