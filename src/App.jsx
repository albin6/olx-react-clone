import './App.css'
import Login from './pages/Login'
import SingUp from './pages/SignUp'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import React, { useEffect, useContext } from 'react'
import { AuthContext } from './store/Context'
import AddPage from './pages/AddPage'
import Post from './store/PostsContext'
import ViewPost from './pages/ViewPost'

function App() {
  const { user } = useContext(AuthContext)

  useEffect(() => {
    console.log('Current User:', user)
  }, [user])

  return (
    <Post>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SingUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/add' element={<AddPage />} />
          <Route path='/view' element={<ViewPost />} />
        </Routes>
      </Router>
    </Post>
  )
}

export default App