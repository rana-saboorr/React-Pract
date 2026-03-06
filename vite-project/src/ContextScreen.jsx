import React from 'react'
import Login from './components/Screen/Login'
import Profile from './components/Screen/Profile'
import UserContextProvider from './components/Context/UserContextProvider'

function ContextScreen() {
  return (
    <UserContextProvider>
        <Login/>
        <Profile/>
    </UserContextProvider>
  )
}

export default ContextScreen
