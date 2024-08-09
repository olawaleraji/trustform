import React from 'react'
import Hero from './Hero'
import About from './About'
import Why from './Why'
import RCRoute from './RCRoute'
import Footer from '../Footer'

type Props = {}

const page = (props: Props) => {
  return (
    <div className=''>
      <Hero />
      <About />
      <Why />
      <RCRoute />
      <Footer />
    </div>
  )
}

export default page
