import React from 'react'

type Props = {}

const TEXT = (props: Props) => {
  return (
    <div className='bg-gray-900'>
      <footer className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <div className='mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:pt-12'>
          <div className='col-span-full lg:col-span-2 mx-4 lg:px-8'>
            <h2 className='text-lg font-semibold mb-4 text-gray-100'>
              Investment Disclosure
            </h2>
            <p className='text-gray-400 text-sm'>
              When you invest with Atlas, you are more than a number; you are a
              partner. As a partner with us, you can access opportunities
              usually reserved only for the largest institutional investors. You
              can access a team driven only by excellence and results. You can
              access real estate investment opportunities designed with you in
              mind.
            </p>
          </div>

          <div className='mx-4'>
            <div className='mb-4 font-bold uppercase tracking-widest text-gray-100'>
              Products
            </div>

            <nav className='flex flex-col gap-4'>
              <div>
                <a
                  href='#'
                  className='text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600'
                >
                  Overview
                </a>
              </div>

              <div>
                <a
                  href='#'
                  className='text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600'
                >
                  Solutions
                </a>
              </div>

              <div>
                <a
                  href='#'
                  className='text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600'
                >
                  Pricing
                </a>
              </div>

              <div>
                <a
                  href='#'
                  className='text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600'
                >
                  Customers
                </a>
              </div>
            </nav>
          </div>

          <div className='mx-4'>
            <div className='mb-4 font-bold uppercase tracking-widest text-gray-100'>
              Company
            </div>

            <nav className='flex flex-col gap-4'>
              <div>
                <a
                  href='#'
                  className='text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600'
                >
                  About
                </a>
              </div>

              <div>
                <a
                  href='#'
                  className='text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600'
                >
                  Investor Relations
                </a>
              </div>

              <div>
                <a
                  href='#'
                  className='text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600'
                >
                  Jobs
                </a>
              </div>

              <div>
                <a
                  href='#'
                  className='text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600'
                >
                  Press
                </a>
              </div>

              <div>
                <a
                  href='#'
                  className='text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600'
                >
                  Blog
                </a>
              </div>
            </nav>
          </div>
        </div>

        <div className='border-t border-gray-800 py-8 text-center text-sm text-gray-400'>
          © 2021 - Present Flowrift. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default TEXT
