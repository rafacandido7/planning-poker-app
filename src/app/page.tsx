import Image from 'next/image'
import { TextField, Button } from '@mui/material'

import Navbar from '@/components/Navbar'

import Cards from '../../public/assets/cards.png'

export default function Home() {
  return (
    <div className='bg-primary'>
      <Navbar

      />

      <div className='flex justify-center items-center py-10'>
        <TextField
          label='Nome da Sala'
          variant='standard'
          className='mr-5'
        />
        <Button variant='text'>Entrar</Button>

      </div>
      <div className='flex justify-center'>
        <Image
          src={Cards}
          alt='Foto de um Planning Poker'
          width={400}
          height={400}
        />
      </div>

    </div>
  )
}
