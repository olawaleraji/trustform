'use client'

import React, { useState } from 'react'

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0])
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!file) {
      setMessage('Please select a file to upload.')
      return
    }

    setIsSubmitting(true)
    setMessage('')

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        setMessage('File successfully sent!')
      } else {
        setMessage('Failed to send file.')
      }
    } catch (error) {
      setMessage('An error occurred while sending the file.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='max-w-lg mx-auto my-8 p-8 bg-white shadow-lg rounded-lg'>
      <h1 className='text-2xl font-bold mb-6 text-gray-800'>
        Upload Signed Document
      </h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-600 mb-2'>Select File:</label>
          <input
            type='file'
            onChange={handleFileChange}
            className='w-full border border-gray-300 rounded-md p-2'
          />
        </div>
        <button
          type='submit'
          disabled={isSubmitting}
          className={`px-4 py-2 text-white rounded ${
            isSubmitting ? 'bg-gray-500' : 'bg-blue-500'
          } hover:bg-blue-600`}
        >
          {isSubmitting ? 'Sending...' : 'Send File'}
        </button>
        {message && <p className='mt-4 text-red-600'>{message}</p>}
      </form>
    </div>
  )
}

export default FileUpload
