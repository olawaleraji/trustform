//   to: 'olawaleraji188@example.com', // Change to your recipient
//   from: 'savagedotjsx@gmail.com', // Change to your verified sender

'use client'
import React, { useState, useRef, ChangeEvent, DragEvent } from 'react'

export default function FileUpload () {
  const [file, setFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile) {
      setFile(droppedFile)
    } else {
      alert('Please upload a file')
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!file) {
      alert('Please select a file')
      return
    }

    setIsUploading(true)
    setUploadStatus(null)

    try {
      const formData = new FormData(e.currentTarget)
      const response = await fetch(
        'https://formsubmit.co/savagedotjsx@gmail.com',
        {
          method: 'POST',
          body: formData
        }
      )

      if (response.ok) {
        setUploadStatus('File uploaded successfully. Check your email.')
      } else {
        setUploadStatus('Upload failed. Please try again.')
      }
    } catch (error) {
      console.error('Upload failed:', error)
      setUploadStatus('Upload failed. Please try again.')
    } finally {
      setIsUploading(false)
    }
  }

  const handleAreaClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Upload File
          </h2>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-8 space-y-6'>
          <input type='hidden' name='_captcha' value='false' />
          <div className='rounded-md shadow-sm -space-y-px'>
            <div
              className={`w-full p-8 border-2 border-dashed rounded-md cursor-pointer ${
                isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
              }`}
              onDragEnter={handleDragEnter}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={handleAreaClick}
            >
              <div className='text-center'>
                <svg
                  className='mx-auto h-12 w-12 text-gray-400'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 48 48'
                  aria-hidden='true'
                >
                  <path
                    d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <p className='mt-1 text-sm text-gray-600'>
                  Drag and drop a file here, or click to select
                </p>
              </div>
              <input
                ref={fileInputRef}
                id='file-upload'
                name='file-upload'
                type='file'
                className='sr-only'
                onChange={handleFileChange}
              />
            </div>
          </div>

          {file && (
            <div className='mt-4 p-4 bg-white rounded-md shadow'>
              <h3 className='text-lg font-medium text-gray-900'>
                Selected file:
              </h3>
              <p className='mt-1 text-sm text-gray-600'>{file.name}</p>
            </div>
          )}

          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50'
              disabled={isUploading || !file}
            >
              {isUploading ? 'Uploading...' : 'Upload'}
            </button>
          </div>

          {uploadStatus && (
            <div
              className={`mt-4 p-4 rounded-md ${
                uploadStatus.includes('success')
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {uploadStatus}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
