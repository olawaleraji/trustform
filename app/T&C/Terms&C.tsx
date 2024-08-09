'use client'

import React from 'react'
import jsPDF from 'jspdf'
import 'jspdf-autotable'

const Terms: React.FC = () => {
  const generatePDF = () => {
    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()
    const margin = 10
    const maxLineWidth = pageWidth - margin * 2

    doc.setFontSize(14)
    doc.text('Terms and Conditions', margin, 20, { align: 'left' })

    const content = [
      {
        title: '1. Duration and Termination:',
        sections: [
          '1.1 If the Submissive Party decides to terminate the Agreements and Withdraw from the SCHOOL OF KINKS, HE/She is Eligible after paying the Withdrawal Fine.',
          '1.2 Upon termination, both Parties shall engage in a debriefing session to discuss the dynamics of their power exchange relationship and address any concerns or issues that may have arisen.'
        ]
      },
      {
        title: '2. Confidentiality:',
        sections: [
          '2.1 We guarantee that all sensitive, nude or explicit content shared by a submissive will be securely deleted upon withdrawal from the House of Kinks, ensuring complete confidentiality and peace of mind.'
        ]
      },
      {
        title: '3. Governing Law:',
        sections: [
          '3.1 This Agreement shall be governed by the laws of the jurisdiction in which both Parties reside.',
          '3.2 Both parties acknowledge that they have read, understood, and agreed to the terms and conditions outlined in the SCHOOL OF KINKS before becoming own to each other.',
          '3.3 All outstanding fees must be cleared.',
          '3.4 The law enforcement agency will charge you based on everything that will be required.',
          '3.5 Your Enrolment ID CARD termination will cost you $2500, this fee does not partake to any fees you have paid in the past.',
          '3.6 The Dominant has no right to request for any fees or what so ever after concluding the signing of these forms.',
          "3.7 I ____________ have decided to pay off for Jess' withdrawal fee alongside mine. (signature) ______________"
        ]
      }
    ]

    let y = 30
    content.forEach(section => {
      doc.setFontSize(12)
      doc.text(section.title, margin, y, { align: 'left' })
      y += 6
      doc.setFontSize(10)

      section.sections.forEach((text, index) => {
        const textLines = doc.splitTextToSize(text.trim(), maxLineWidth)
        textLines.forEach((line: string | string[]) => {
          if (y + 10 > doc.internal.pageSize.getHeight() - margin) {
            doc.addPage()
            y = margin
          }
          doc.text(line, margin, y, { align: 'left' })
          y += 6
        })
        y += 4
      })
      y += 10
    })

    doc.setFontSize(10)
    const signatureY = y
    doc.text('SIGNATURE:_____________________', margin, signatureY, {
      align: 'left'
    })
    doc.text(
      'SIGNATURE:_____________________',
      pageWidth / 2 + margin,
      signatureY,
      { align: 'left' }
    )
    doc.text('DOMINANT', margin + 60, signatureY + 10, { align: 'left' })
    doc.text('SUBMISSIVE', pageWidth / 2 + margin + 60, signatureY + 10, {
      align: 'left'
    })

    doc.save('terms-and-conditions.pdf')
  }

  return (
    <div className='max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg my-6 lg:my-12'>
      <h1 className='text-3xl font-bold mb-6 text-gray-800 relative inline-block'>
        Terms and Conditions
        <div className='absolute -top-4 -left-4 w-12 h-12 bg-blue-100 rounded-full -z-10'></div>
      </h1>

      <div id='terms-content' className='space-y-6 text-gray-600'>
        <div>
          <h2 className='text-xl font-semibold mb-2'>
            1. Duration and Termination:
          </h2>
          <p className='text-sm pb-2'>
            <span className='font-medium pr-2'>1.1</span> If the Submissive
            Party decides to terminate the Agreements and Withdraw from the
            SCHOOL OF KINKS, HE/She is Eligible after paying the Withdrawal
            Fine.
          </p>
          <p className='text-sm pb-2'>
            <span className='font-medium pr-2'>1.2</span> Upon termination, both
            Parties shall engage in a debriefing session to discuss the dynamics
            of their power exchange relationship and address any concerns or
            issues that may have arisen.
          </p>
        </div>

        <div>
          <h2 className='text-xl font-semibold mb-2'>2. Confidentiality:</h2>
          <p className='text-sm pb-2'>
            <span className='font-medium pr-2'>2.1</span>
            We guarantee that all sensitive, nude or explicit content shared by
            a submissive will be securely deleted upon withdrawal from the House
            of Kinks, ensuring complete confidentiality and peace of mind.
          </p>
        </div>

        <div>
          <h2 className='text-xl font-semibold mb-2'>3. Governing Law:</h2>
          <p className='text-sm pb-2'>
            <span className='font-medium pr-2'>3.1</span> This Agreement shall
            be governed by the laws of the jurisdiction in which both Parties
            reside.
          </p>
          <p className='text-sm pb-2'>
            <span className='font-medium pr-2'>3.2</span> Both parties
            acknowledge that they have read, understood, and agreed to the terms
            and conditions outlined in in the SCHOOL OF KINKS before becoming
            own to each other.
          </p>
          <p className='text-sm pb-2'>
            <span className='font-medium pr-2'>3.3</span> All outstanding fees
            must be cleared.
          </p>
          <p className='text-sm pb-2'>
            <span className='font-medium pr-2'>3.4</span> The law enforcement
            agency will charge you based on everything that will be required.
          </p>
          <p className='text-sm pb-2'>
            <span className='font-medium pr-2'>3.5</span> Your Enrolment ID CARD
            termination will cost you $2500, this fee does not partake to any
            fees you have paid in the past.
          </p>
          <p className='text-sm pb-2'>
            <span className='font-medium pr-2'>3.6</span> The Dominant has no
            right to request for any fees or what so ever after concluding the
            signing of these forms.
          </p>
          <p className='text-sm pb-2'>
            <span className='font-medium pr-2'>3.7</span> I ____________ have
            decided to pay off for Jess&apos; withdrawal fee alongside mine.
            (signature) ______________
          </p>
        </div>

        <div className='mt-8'>
          <p className='text-sm pb-2'>
            <span className='font-medium pr-2'>
              Reasons for withdrawal must be stated.
            </span>
          </p>
          <div className='flex justify-between'>
            <div>
              <label className='block text-sm font-medium text-gray-600'>
                Dominant Signature:
              </label>
              <p className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm'>
                ______________________
              </p>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-600'>
                Submissive Signature:
              </label>
              <p className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm'>
                ______________________
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={generatePDF}
        className='mt-6 px-4 py-2 bg-blue-500 text-white rounded'
      >
        Download as PDF
      </button>
    </div>
  )
}

export default Terms
