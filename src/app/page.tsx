import { TextField, Button } from '@mui/material'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Banner from '../../public/assets/banner.jpg'

export default function Home() {
  return (
    <div className='bg-primary'>
        <Navbar />

      <div className='flex justify-center items-center py-10'>
        <TextField
          label='Nome da Sala'
          variant="standard"
          id="standard-basic"
          className='mr-5'
        />
        <Button variant="outlined">Entrar</Button>

      </div>

      <div className='flex justify-center'>
        <Image
          src={Banner}
          alt="Foto de um Planning Poker"
          width={600}

        />
      </div>

    </div>
  )
}
