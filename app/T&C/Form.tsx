import React from 'react'

type Props = {}

const Form = (props: Props) => {
  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-lg px-4 md:px-8'>
        <h1 className='mb-4 text-center lg:text-2xl text-lg font-bold text-gray-800 sm:text-3xl md:mb-6'>
          RAVEN AND JESS WITHDRAWAL FORM
        </h1>

        <p className='mb-6 text-gray-500 sm:text-lg md:mb-8'>
          This withdrawal form agreement here in after referred to as the
          Agreement entered in between the undersigned
          parties(MASTER/SUBMISSIVE), this form is handed out whenever the
          submissives wants to back out or cancel being a membership of
          the school of kinks.
        </p>

        <h2 className='mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4'>
          Definitions:
        </h2>

        <p className='mb-2 text-gray-500 sm:text-lg'>
          <span className='text-gray-700 font-medium'>Dominant: </span>
          The individual assuming the role of the dominant partner in the power
          dynamic.
        </p>
        <p className='mb-2 text-gray-500 sm:text-lg'>
          <span className='text-gray-700 font-medium'>Slave: </span>
          The individual assuming the role of the submissive partner in the
          power dynamic.
        </p>

        <p className='mb-6 text-gray-500 sm:text-lg'>
          <span className='text-gray-700 font-medium'>Power Exchange: </span>{' '}
          The consensual transfer of power and authority from the Slave to the
          Dominant.
        </p>

        <h2 className='mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4'>
          Consent and Safety:
        </h2>

        <p className='mb-2 text-gray-500 sm:text-lg'>
          Submissive wish to leave the school for reasons best known to them
        </p>
        <p className='mb-2 text-gray-500 sm:text-lg'>
          The Parties agree to prioritize open communication, trust, and respect
          for each other&apos;s boundaries at all times.
        </p>
        <p className='mb-6 text-gray-500 sm:text-lg'>
          The SCHOOL has no right to keep any informations about these parties
          there after!!…. Other wise they face the law and the school will get
          closedown by the bdsm community
        </p>

        <h2 className='mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4'>
          Dominant&apos;s Responsibilities:
        </h2>

        <ul className='mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8'>
          <li>
            To provide guidance, structure, and discipline within the
            agreed-upon boundaries.
          </li>
          <li>To establish rules and protocols for the Slave to follow.</li>
          <li>
            To prioritize the Slave&apos;s safety, consent, and well-being.
          </li>
          <li>
            To communicate openly with the Slave and address any concerns or
            issues that may arise.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Form
