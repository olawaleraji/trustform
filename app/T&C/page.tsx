import React from 'react'
import Footer from '../Footer'
import Terms from './Terms&C'
import Header from '../LandingPage/Header'
import Form from './Form'
import FileUpload from './FileUpload'

type Props = {}

const page = (props: Props) => {
  return (
    <div className=''>
      <Header />
      <Form />
      <Terms />
      <FileUpload />
      <Footer />
    </div>
  )
}

export default page
