import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='flex flex-col md:flex-row max-w-6xl mx-auto p-12 items-start'>
      <div className='md:w-2/3 pr-8'>
        <h2 className='text-blue-500 text-sm font-semibold mb-2'>— About</h2>
        <h1 className='text-2xl lg:text-3xl font-bold text-gray-800 mb-4'>
          TrustForm Digital Agreements
        </h1>
        <p className='text-gray-600 leading-relaxed'>
          Welcome to TrustForm, where creating and managing legally binding
          agreements is seamless and secure. Our platform is designed to cater
          to both users and owners, ensuring a streamlined process from creation
          to electronic signatures. TrustForm offers a user-friendly interface
          that guarantees efficiency and reliability for all your agreement
          needs. From drafting comprehensive contracts to obtaining secure
          digital signatures, TrustForm provides end-to-end solutions that
          simplify the entire lifecycle of your agreements. Whether you&apos;re
          handling NDAs, service contracts, or any other legal documents, our
          tools are designed to ensure compliance, enhance collaboration, and
          improve the overall efficiency of your workflow. Experience the peace
          of mind that comes with knowing your agreements are handled with the
          utmost care and precision.
        </p>
      </div>
      <div className='md:w-1/3 mt-6 md:mt-0'>
        <div className='relative'>
          <img
            src='https://images.unsplash.com/photo-1618556450991-2f1af64e8191?auto=format&q=75&fit=crop&w=1000'
            alt='Digital Agreement Platform'
            width={400}
            height={300}
            className='rounded-lg shadow-lg'
          />
          <div className='absolute bottom-3 right-3 bg-white px-3 py-1 rounded-full shadow-md flex items-center'>
            <span className='text-yellow-400 text-sm'>★★★★★</span>
            <span className='ml-1 text-gray-700 font-semibold'>4.8</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
