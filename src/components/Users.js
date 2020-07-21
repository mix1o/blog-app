import React,{useEffect,useState} from "react"
import User from "./User";


const Users = ({userid}) => {

    const [users,setUsers] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/?id=${userid}`)
        .then(response => response.json())
        // .then(json => console.log(json))
        .then(json => setUsers(json))
    },[userid])

    return (
        users.map((us)=> <User key={us.id} id={us.id} name={us.name}/>)
    )
}
export default Users;