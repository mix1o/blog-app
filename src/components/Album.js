import React,{useEffect,useState} from "react"
import Users from "./Users";
import {Link} from "react-router-dom"

const Album = ({title,userid,id}) => {


    return (
        <div className="container-post">
        <p className="title-post">{title}</p>
        <Users userid={userid}/>
        <Link className="see-more" to={`/albums/${id}`}>See photos<i class="fas fa-arrow-right"></i></Link>
        </div>
    )
}
export default Album;