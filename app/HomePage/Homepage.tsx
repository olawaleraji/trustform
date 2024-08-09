// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Homepage = (props: Props) => {
  return (
    <div className='bg-white pb-6 sm:pb-8 lg:pb-12'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8 mt-16'>
        <section className='mb-8 flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row'>
          {/* content - start */}
          <div className='flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12'>
            <p className='mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl'>
              Welcome to BDSM WITHDRAWAL FROM
            </p>
            <h1 className='mb-8 text-2xl font-bold text-gray-700 sm:text-3xl md:mb-12 md:text-3xl'>
              Simplifying Withdrawal Legal Agreements for Everyone in the SCHOOL
              OF KINKS
            </h1>

            <div className='flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start'>
              <Link
                href='T&C'
                className='inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base'
              >
                WITHDRAWAL FROM
              </Link>
              <Link
                // href='/take-tour'
                // href='/create-document'
                href='T&C'
                className='inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base'
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
          {/* content - end */}

          {/* image - start */}
          <div className='h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-96 xl:w-5/12'>
            <img
              src='https://images.unsplash.com/photo-1618556450991-2f1af64e8191?auto=format&q=75&fit=crop&w=1000'
              alt='Photo by Fakurian Design'
              className='object-cover w-full h-full'
            />
          </div>
          {/* image - end */}
        </section>

        <section className='flex flex-col items-center justify-between gap-10 border-t pt-8 lg:flex-row lg:gap-8'>
          {/* stats - start */}
          <div className='-mx-6 grid grid-cols-2 gap-4 md:-mx-8 md:flex md:divide-x'>
            <div className='px-6 md:px-8'>
              <span className='block text-center text-lg font-bold text-indigo-500 md:text-left md:text-xl'>
                50+
              </span>
              <span className='block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base'>
                Agreements Created
              </span>
            </div>

            <div className='px-6 md:px-8'>
              <span className='block text-center text-lg font-bold text-indigo-500 md:text-left md:text-xl'>
                Countless
              </span>
              <span className='block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base'>
                Successful Agreements
              </span>
            </div>
          </div>
          {/* stats - end */}

          {/* social - start */}
          <div className='flex items-center justify-center gap-4 lg:justify-start'>
            <span className='text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base'>
              Connect with Us
            </span>
            <span className='h-px w-12 bg-gray-200'></span>
            <div className='flex gap-4'>
              <a
                href='#'
                target='_blank'
                className='text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'
              >
                <svg
                  className='h-5 w-5'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.667.072 4.947.201 4.362 2.618 6.78 6.98 6.98 1.281.059 1.688.073 4.947.073 3.259 0 3.667-.014 4.947-.072 4.362-.201 6.78-2.618 6.98-6.98.059-1.281.073-1.688.073-4.947 0-3.259-.014-3.667-.072-4.947-.2-4.362-2.618-6.78-6.98-6.98-1.281-.059-1.688-.073-4.947-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.141c-2.191 0-3.979-1.788-3.979-3.979s1.788-3.979 3.979-3.979 3.979 1.788 3.979 3.979-1.788 3.979-3.979 3.979zm6.406-11.845c-.796 0-1.441.645-1.441 1.441 0 .796.645 1.441 1.441 1.441.796 0 1.441-.645 1.441-1.441 0-.796-.645-1.441-1.441-1.441z' />
                </svg>
              </a>
              <a
                href='#'
                target='_blank'
                className='text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'
              >
                <svg
                  className='h-5 w-5'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M24 4.557c-.883.392-1.83.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.565-2.005.974-3.127 1.195-.896-.957-2.173-1.555-3.591-1.555-2.719 0-4.92 2.201-4.92 4.917 0 .386.044.762.127 1.124-4.087-.205-7.713-2.164-10.141-5.144-.424.729-.666 1.577-.666 2.483 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.229-.616v.061c0 2.388 1.697 4.382 3.946 4.834-.413.111-.848.171-1.296.171-.317 0-.626-.031-.928-.089.631 1.963 2.463 3.393 4.63 3.433-1.698 1.33-3.835 2.123-6.156 2.123-.4 0-.793-.023-1.182-.069 2.194 1.408 4.804 2.229 7.611 2.229 9.129 0 14.127-7.56 14.127-14.127 0-.215-.005-.429-.014-.641.97-.701 1.801-1.577 2.465-2.576z' />
                </svg>
              </a>
              {/* <a
                href='#'
                target='_blank'
                className='text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'
              >
                <svg
                  className='h-5 w-5'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M23.998 4.428c-.882.392-1.83.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.565-2.005.974-3.127 1.195-.896-.957-2.173-1.555-3.591-1.555-2.719 0-4.92 2.201-4.92 4.917 0 .386.044.762.127 1.124-4.087-.205-7.713-2.164-10.141-5.144-.424.729-.666 1.577-.666 2.483 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.229-.616v.061c0 2.388 1.697 4.382 3.946 4.834-.413.111-.848.171-1.296.171-.317 0-.626-.031-.928-.089.631 1.963 2.463 3.393 4.63 3.433-1.698 1.33-3.835 2.123-6.156 2.123-.4 0-.793-.023-1.182-.069 2.194 1.408 4.804 2.229 7.611 2.229 9.129 0 14.127-7.56 14.127-14.127 0-.215-.005-.429-.014-.641.97-.701 1.801-1.577 2.465-2.576z' />
                </svg>
              </a> */}
            </div>
          </div>
          {/* social - end */}
        </section>
      </div>
    </div>
  )
}

export default Homepage
