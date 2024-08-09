import React from 'react'
import Homepage from './Homepage'
import Footer from '../Footer'
import RCRoute from '../LandingPage/RCRoute'
import Header from '../LandingPage/Header'

type Props = {}

const page = (props: Props) => {
  return (
    <div className=''>
      <Header />
      <Homepage />
      <RCRoute />
      <Footer />
    </div>
  )
}

export default page
