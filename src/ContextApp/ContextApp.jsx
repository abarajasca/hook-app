import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'
import { Navbar } from './Navbar'
import { UserProvider } from './context/UserProvider'


export const ContextApp = () => {
  return (
    <UserProvider>
        <h1>ContextApp</h1>
        <Navbar />
        <hr />

        <Routes>
            <Route path="/" element={ <HomePage/> } />
            <Route path="/login" element={ <LoginPage /> } />
            <Route path="/about" element={ <AboutPage/> } />            

            <Route path="/*" element={ <Navigate to="/" /> } />            
        </Routes>
    </UserProvider>
  )
}
