import { TextField, Button } from '@mui/material'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div>
        <Navbar />

      <div className='flex justify-center items-center py-5'>
        <TextField
          label='Nome da Sala'
          variant='outlined'
        />
        <Button variant="contained">Entrar</Button>
      </div>

    </div>
  )
}
