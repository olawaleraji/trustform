import React from 'react'

type Props = {}

const FeatureCard = ({
  title,
  description,
  iconSrc
}: {
  title: string
  description: string
  iconSrc: string
}) => (
  <div className='flex flex-col items-center text-center mb-8'>
    <div className='relative mb-16'>
      <div className='absolute -top-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-blue-100 p-4 rounded-md mb-4'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          className='size-6'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25'
          />
        </svg>
      </div>
    </div>
    <h3 className='text-lg font-semibold mb-2'>{title}</h3>
    <p className='text-sm text-gray-600 px-8'>{description}</p>
  </div>
)

const Why = (props: Props) => {
  const features = [
    {
      title: 'User-Friendly Interface',
      iconSrc: '/icons/user-friendly.svg',
      description:
        'Our platform is designed with simplicity in mind, ensuring you can create and manage digital agreements effortlessly.'
    },
    {
      title: 'Secure Transactions',
      iconSrc: '/icons/security.svg',
      description:
        'TrustForm guarantees the security of your digital agreements, providing peace of mind with robust encryption and security measures.'
    },
    {
      title: 'End-to-End Solution',
      iconSrc: '/icons/end-to-end.svg',
      description:
        'From creation to electronic signatures, TrustForm offers a comprehensive solution for all your digital agreement needs.'
    },
    {
      title: 'Efficient Workflow',
      iconSrc: '/icons/efficiency.svg',
      description:
        'Streamline your workflow with TrustForm, making the process of managing agreements faster and more efficient.'
    },
    {
      title: 'Reliable Support',
      iconSrc: '/icons/support.svg',
      description:
        'Our dedicated support team is always available to assist you, ensuring a smooth and trouble-free experience.'
    },
    {
      title: 'Comprehensive Documentation',
      iconSrc: '/icons/documentation.svg',
      description:
        'Access detailed documentation and resources to help you make the most of TrustForm’s features and capabilities.'
    }
  ]

  const description =
    'TrustForm is your trusted partner for creating and managing legally binding digital agreements. Our platform offers a seamless experience, ensuring your transactions are efficient and secure.'

  return (
    <div className='max-w-6xl mx-auto px-12 py-16'>
      <h2 className='text-blue-500 text-sm font-semibold text-center mb-2'>
        — Why TrustForm —
      </h2>
      <h1 className='text-3xl font-bold text-center text-gray-800 mb-4'>
        Why Choose TrustForm?
      </h1>
      <p className='text-center text-gray-600 max-w-3xl mx-auto mb-16'>
        {description}
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {features.map((feature, index) => (
          <div key={index} className='bg-slate-200 px-6 mb-8 rounded-md'>
            <FeatureCard
              title={feature.title}
              description={feature.description}
              iconSrc={feature.iconSrc}
            />
          </div>
        ))}
      </div>

      <div className='flex justify-center mt-12 space-x-4'>
        <button className='bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300'>
          Get Started
        </button>
        <button className='border border-blue-500 text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300'>
          Learn More
        </button>
      </div>
    </div>
  )
}

export default Why
