import React from 'react'
import Header from './Header'
import Link from 'next/link'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='bg-gray-900'>
      <Header />
      <section className='mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex lg:items-center lg:justify-center md:px-8'>
        <div className='space-y-4 flex-1 text-center'>
          <h1 className='text-white font-bold text-4xl xl:text-5xl lg:px-16'>
            Welcome to
            <span className='text-indigo-400'> TrustForm</span>
          </h1>
          <p className='text-gray-300 leading-relaxed lg:px-36 px-8'>
            Create and manage legally binding digital agreements with ease and
            security. TrustForm offers a seamless experience from document
            creation to electronic signatures, ensuring your transactions are
            efficient and reliable.
          </p>
          <div className='pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-center'>
            <Link
              href='T&C'
              className='px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto'
            >
              Get started
            </Link>
            <Link
              href='T&C'
              className='px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto'
            >
              Try it out
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero

{
  /* <section className="relative overflow-hidden py-28 px-4 bg-gray-900 md:px-8">
<div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10"></div>
<div className="max-w-xl mx-auto text-center relative">
    <div className="py-4">
        <h3 className="text-3xl text-gray-200 font-semibold md:text-4xl">
            Get Unlimited Access To All Templates
        </h3>
        <p className="text-gray-300 leading-relaxed mt-3">
            Nam erat risus, sodales sit amet lobortis ut, finibus eget metus. Cras aliquam ante ut tortor posuere feugiat. Duis sodales nisi id porta lacinia.
        </p>
    </div>
    <div className="mt-5 items-center justify-center gap-3 sm:flex">
        <a 
            href="javascript:void()"
            className="block w-full mt-2 py-2.5 px-8 text-gray-700 bg-white rounded-md duration-150 hover:bg-gray-100 sm:w-auto"
        >
            Try It Out
        </a>
        <a
            href="javascript:void()"
            className="block w-full mt-2 py-2.5 px-8 text-gray-300 bg-gray-700 rounded-md duration-150 hover:bg-gray-800 sm:w-auto"
        >
            Get Started
        </a>
    </div>
</div>
</section> */
}
