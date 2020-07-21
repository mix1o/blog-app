import React from "react"
import {Link} from 'react-router-dom'
import photo from "../img/lol7.png"

const Main = () => {
    return (
        <>
            <header className="header">
                <nav className="nav">
                    <ul className="list">
                        <li><Link className="link" to="posts">Posts</Link></li>
                        <li><Link className="link" to="albums">Albums</Link></li>
                        <li><Link className="link" to="searchusers">Search user</Link></li>
                    </ul>
                    <ul className="second-list">
                        <li className="log">Log In</li>
                        <li className="sign">Sign In</li>
                    </ul>
                </nav>
                <div className="hero">
                    <img className="hero-2" src={photo}/>
                    <h1 className="heading-1">
                    Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit
                    </h1>
                    <div className="img-hero">
                       <img src="https://images.unsplash.com/photo-1521117177129-ca6b2e68cb26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="foto"/>
                    </div>
                </div>
            </header>
            <section className="content">
                <div className="box">
                  
                    <div className="box-content">
                        <h2 className="heading-2">See all posts</h2>
                        <p className="para-1">Is sed sodales elementum, lectus metus </p>
                        <p className="para-2">800+ posts</p>
                    </div>
                    <div className="box-img">
                        <Link className="link" to="posts">Posts</Link>    
                        <i class="fas fa-book"></i>
                    </div>
                </div>
                <div className="box">
                   
                    <div className="box-content">
                        <h2 className="heading-2">See all albums</h2>
                        <p className="para-1">Vitae interdum. Duis in cursus orci </p>
                        <p className="para-2">400+ albums</p>
                    </div>
                    <div className="box-img">
                    <Link className="link" to="albums">Albums</Link>
                    <i class="fas fa-images"></i>
                      
                    </div>
                </div>
                <div className="box">
                    
                    <div className="box-content">
                        <h2 className="heading-2">Search users</h2>
                        <p className="para-1">Proin elit est, convallis scelerisque porta non</p>
                        <p className="para-2">100+ users</p>
                    </div>
                    <div className="box-img">
                    
                    <Link className="link" to="searchusers">Search user</Link>
                    <i class="fas fa-users"></i>
                    </div>
                </div>
            </section>
            <section className="section-photos">
            <div className="photos">
                    <img src="https://images.unsplash.com/photo-1555092394-6ed41ac4afb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="photos-p photos-1"/>
                    <img src="https://images.unsplash.com/photo-1553729784-e91953dec042?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="photos-p photos-2"/>
                    <img src="https://images.unsplash.com/photo-1523043829291-4195e5c69656?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="photos-p photos-3"/>
                    <img src="https://images.unsplash.com/photo-1518457900604-5c973dffdedf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80" className="photos-p photos-4"/>
                    <img src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="photos-p photos-5"/>
                    <img src="https://images.unsplash.com/photo-1522925875192-02df6922c92f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="photos-p"/>
                    <img src="https://images.unsplash.com/flagged/photo-1551592398-c320012bc1c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="photos-p"/>
                    <img src="https://images.unsplash.com/photo-1498050842100-717f08672ac6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="photos-p"/>
                    <img src="https://images.unsplash.com/photo-1551741568-53a19562313c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="photos-p"/>
                    <img src="https://images.unsplash.com/photo-1567612529009-820ed950f3ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="photos-p"/>
                </div>
            </section>
            <footer className="footer">
                <p>Lorem ipsum. Nullam scelerisque volutpat finibu &copy;</p>
            </footer>
     
        </>
    )
}
export default Main;

   
 