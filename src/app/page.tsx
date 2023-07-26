import Image from 'next/image'
import { TextField, Button } from '@mui/material'

import Navbar from '@/components/Navbar'

import Cards from '../../public/assets/cards.png'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className='bg-primary'>
      <Navbar />

      <div className='py-20'>
        <div className='flex justify-center items-center py-10'>
          <TextField
            label='Nome da Sala'
            variant='standard'
            className='mr-5'
          />
          <Button variant='text'>Entrar</Button>

        </div>
        <div className='flex justify-center items-center'>
          <p className='text-2xl mr-14 leading-normal'>
            Juntos, vamos jogar nossas cartas
            <br />
            e revelar o sucesso
            <br />
            em cada desafio com o poder do
            <br />
            Planning Poker!
          </p>
          <Image
            src={Cards}
            alt='Foto de um Planning Poker'
            width={330}
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}
