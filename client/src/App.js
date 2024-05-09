import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'boxicons'
import NavigationMenu from './NavigationMenu';
import DailyMeme from './components/DailyMeme';
import Feed from './components/Feed';
import LoginRegister from './components/LoginRegister';
import Post from './components/Post';
import MyPosts from './components/MyPosts';

function App() {

  /*const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])*/

  /*<div>
      {(typeof backendData.users === 'undefined') ? (
        <p>loading...</p>
      ): (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
    </div>*/

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' Component={NavigationMenu}/>
        <Route path='/dailymeme' Component={DailyMeme}/>
        <Route path='/feed' Component={Feed}/>
        <Route path='/loginregister' Component={LoginRegister}/>
        <Route path='/post' Component={Post}/>
        <Route path='/myposts' Component={MyPosts}/>
      </Routes>
    </Router>
    </>
  )
}

export default App