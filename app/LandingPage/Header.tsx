import React from 'react'
import Link from 'next/link'

type Props = {}

const Header = (props: Props) => {
  const navigation = [
    { title: 'Withdrawal Form' },
    { title: 'Terms & Conditions' }
  ]

  return (
    <header className='bg-gray-900'>
      <nav className='items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6'>
        <Link href='T&C' className='pb-4'>
          <img
            src='https://media.istockphoto.com/id/547202368/photo/checklist-icon-blue-glossy-round-button.webp?b=1&s=170667a&w=0&k=20&c=VX5M52clWEYTq_0i13kujZeeoDKIFv_LE72_tPk_L8E='
            width={40}
            height={10}
            className='rounded-md'
            alt='logo'
          />
        </Link>
        <ul className='py-4 flex-1 items-center flex space-x-3 sm:space-x-6 sm:justify-end'>
          {navigation.map((item, idx) => (
            <li className='text-gray-200' key={idx}>
              <Link href='T&C'>{item.title}</Link>
            </li>
          ))}
          {/* <li>
            <Link href='/login' className='flex items-center text-gray-200'>
              Log In
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 ml-2'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  )
}

export default Header
