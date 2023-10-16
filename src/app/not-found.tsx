import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404: Page not found',
  description: 'next-error'
}

export default function NotFound() {
  return (
    <div className='min-h-screen flex justify-center items-center bg-black text-white'>
      <div className='flex space-x-3'>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          404 
        </h4>
        <p className="leading-7 text-sm text-center justify-center items-center flex">
          This page could not be found
        </p>
      </div>
    </div>
  )
}