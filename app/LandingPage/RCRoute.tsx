import Link from 'next/link'
import React from 'react'

type Props = {}

const RCRoute = (props: Props) => {
  return (
    <div className='max-w-4xl mx-auto my-12 px-8'>
      <div className='bg-blue-500 rounded-md p-8 relative overflow-hidden'>
        <div className='absolute inset-0'>
          <svg
            className='w-full h-full'
            viewBox='0 0 400 100'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0,50 Q100,0 200,50 T400,50'
              fill='none'
              stroke='rgba(255,255,255,0.1)'
              stroke-width='2'
            />
            <path
              d='M0,80 Q100,30 200,80 T400,80'
              fill='none'
              stroke='rgba(255,255,255,0.1)'
              stroke-width='2'
            />
          </svg>
        </div>
        <div className='relative z-10 text-center'>
          <h2 className='text-white text-2xl lg:text-3xl font-bold mb-4'>
            Ready for Withdraw Form?
          </h2>
          <Link href='T&C'>
            <button className='bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300'>
              View the Terms and Conditons
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RCRoute
