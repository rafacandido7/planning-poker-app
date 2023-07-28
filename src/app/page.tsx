'use client'

import { Navbar } from '@/components/Navbar'
import { Form } from '@/components/Form'
import { Presentation } from '@/components/Presentation'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className='bg-gray'>
      <Navbar />
      <div className='flex justify-center items-center py-5 gap-3'>
        <Form />
      </div>
      <Presentation />
      <Footer />
    </div>
  )
}
