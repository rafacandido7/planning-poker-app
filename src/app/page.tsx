'use client'

import { Navbar } from '@/components/Navbar'
import { Form } from '@/components/Form'
import { Presentation } from '@/components/Presentation'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className='bg-gray'>
      <Navbar />
      <div
        style={{ minHeight: '75vh' }}
        className='flex justify-around items-center min-h-screen px-4'>
        <Form />
        <Presentation />
      </div>
      <Footer />
    </div >
  )
}
