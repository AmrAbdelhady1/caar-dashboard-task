import Head from 'next/head'
import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>
          Car Dashboard
        </title>
      </Head>
      <header>
        <Sidebar />
      </header>
      <main className='bg-gray-100 min-h-screen'>
        <Navbar />
        <div>
        {children}
        </div>
      </main>
      <footer></footer>
    </>
  )
}

export default Layout