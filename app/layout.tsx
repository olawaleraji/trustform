import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BDSM WITHDRAWAL',
  description: 'Agreement, Terms and Conditions Page',
  icons:
    'https://media.istockphoto.com/id/547202368/photo/checklist-icon-blue-glossy-round-button.webp?b=1&s=170667a&w=0&k=20&c=VX5M52clWEYTq_0i13kujZeeoDKIFv_LE72_tPk_L8E='
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
