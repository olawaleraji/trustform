import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-gray-900'>
      <footer className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <div className='mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:pt-12'>
          <div className='col-span-full lg:col-span-2 mx-4 lg:px-8'>
            <h2 className='text-lg font-semibold mb-4 text-gray-100'>
              Power Exchange Dynamics
            </h2>
            <p className='text-gray-400 text-sm'>
              Our platform supports the creation and management of consensual
              power exchange agreements. We prioritize trust, communication, and
              safety, ensuring that both Dominant and Slave roles are executed
              with respect and responsibility. Consent and well-being are
              central to our approach.
            </p>
          </div>

          <div className='mx-4'>
            <div className='mb-4 font-bold uppercase tracking-widest text-gray-100'>
              Features
            </div>

            <nav className='flex flex-col gap-4'>
              <div>
                <a
                  href='#'
                  className='text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600'
                >
                  Dynamic Agreements
                </a>
              </div>

              <div>
                <a
                  href='#'
                  className='text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600'
                >
                  Consent Management
                </a>
              </div>

              <div>
                <a
                  href='#'
                  className='text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600'
                >
                  Safety Protocols
                </a>
              </div>
            </nav>
          </div>

          <div className='mx-4'>
            <div className='mb-4 font-bold uppercase tracking-widest text-gray-100'>
              About Us
            </div>

            <nav className='flex flex-col gap-4'>
              <div>
                <a
                  href='#'
                  className='text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600'
                >
                  Our Mission
                </a>
              </div>

              <div>
                <a
                  href='#'
                  className='text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600'
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>
        </div>

        <div className='border-t border-gray-800 py-8 text-center text-sm text-gray-400'>
          © 2021 - Present TrustForm. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer
