import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

import Footer from '../components/Footer'


const MainLayout = () => {

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout;