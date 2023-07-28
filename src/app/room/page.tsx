'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Box } from '@mui/material'
import { Game } from '@/components/Game'

export default function Room() {

  return (
    <div className='bg-gray'>
      <Navbar />
      <Box className='flex justify-center items-center flex-col py-5 gap-3'>
        <h1>Room</h1>
        <Game />
      </Box>
      <Footer />
    </div>
  )
}
