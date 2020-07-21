import React from 'react'

const Photo = ({title,url}) => {


    return (
        <div className="photo">        
            <p className="photo-title">{title}</p>
            <img className="album-photo" src={url}/>
        </div>

    )
}
export default Photo;