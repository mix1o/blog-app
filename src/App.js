import React from 'react';
import './App.css';
import Posts from './pages/Posts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SinglePost from "./pages/SinglePost"
import Main from "./pages/Main"
import Comments from './components/Comments';
import Albums from './components/Albums';
import SingleAlbum from "./pages/SingleAlbum"
import SearchUsers from "./components/SearchUsers"

function App() {


  return (

    
  <Router>
      <Switch>
        <Route exact path="/posts/:id" component={SinglePost}/>
        <Route exact path="/albums/:id" component={SingleAlbum}/>
        <Route exact path="/posts" component={Posts}/>
        <Route exact path="/comments" component={Comments}/>
        <Route exact path="/albums" component={Albums}/>
        <Route exact path="/searchusers" component={SearchUsers}/>
        <Route path="/" component={Main}/>    
      </Switch>
    </Router>

  );
}

export default App;
