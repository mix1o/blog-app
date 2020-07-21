import React, { useState } from 'react'
import SearchUser from './SearchUser';
import User from './User';
import {Link} from 'react-router-dom'

const SearchUsers = () => {

    const [value,setValue] = useState('')
    const [searchUser,setSearchUser] = useState([]);
    const [error,setError] = useState(false);
    const [isSearch,setIsSearch] = useState(false);

    const search = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/?name=${value}`)
        .then(response => response.json())
        .then((json) => {
        
                if(json.length === 1){
                    setSearchUser(json)
                    setError(false)
                    setIsSearch(true)
                }else {
                    setError(true)
                }
        
        })
        //.then(json =>console.log(json))
        setValue('');
    }


    const enter = event => {
        if(event.keyCode === 13){
            search();
        }
    }


    return (
        <div className="search-users">
         <Link className="back" to="/"><i class="fas fa-arrow-left"></i>Back</Link>
         <div className="search">
        <h3 className="heading-3">Search user</h3>
        <input value={value} onKeyDown={enter} type="text" className="input" onChange={(e) => setValue(e.target.value)}/>
        <button onClick={search} className="btn-search">Search</button>
        </div>
        {!isSearch && !error && <p className="results">Here will appear results</p>}
        {!error && searchUser.map((user) => <SearchUser key={user.id} id={user.id} email={user.email} name={user.name}/>)}
        {error && <p className="not-found">User not found! Please enter a correct name user</p>}
        </div>
    )
}

export default SearchUsers;