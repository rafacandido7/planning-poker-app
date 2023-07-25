import { TextField, Button } from '@mui/material'

export default function Home() {
  return (
    <div className='flex justify-center items-center py-5'>

      <TextField
        label='Nome da Sala'
        variant='outlined'
      />
      <Button variant="contained">Entrar</Button>

    </div>
  )
}
