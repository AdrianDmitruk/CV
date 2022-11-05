import React from 'react'

import { Outlet } from 'react-router-dom'

import { Header, Footer } from '../components'

const MainLayout = () => {
  return (
    <div className="site-container">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
