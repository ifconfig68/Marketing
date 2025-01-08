import Footer from 'components/navigation/Footer'
import Navbar from 'components/navigation/Navbar'
import Layout from 'hocs/layout/Layout'
import React from 'react'

function Home  () {
  return (
    <Layout>
      <Navbar/>
        Home
      <Footer/>
    </Layout>
  )
}

export default Home
