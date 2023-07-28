import { Box, TextField, Typography } from '@mui/material'

interface PlayerNameInputProps {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
}

export function PlayerNameInput({name, setName}: PlayerNameInputProps) {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  return (
    <div className='mb-2'>
      <Typography className='mb-2 text-prim font-medium'>Digite o seu Username:</Typography>
      <Box>
        <TextField
          variant='standard'
          type='text'
          placeholder='Username'
          className='w-full'
          value={name}
          onChange={handleNameChange}
        />
      </Box>
    </div>
  )
}
