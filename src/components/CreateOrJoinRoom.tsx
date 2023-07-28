import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'

interface CreateOrJoinRoomProps {
  option: string
  setOption: React.Dispatch<React.SetStateAction<string>>
}

export function CreateOrJoinRoom({option, setOption}: CreateOrJoinRoomProps) {

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOption(e.target.value)
  }

  return (
    <Box>
      <FormControl>
        <Typography id='room' className='text-prim font-medium'> Sala:</Typography>
        <RadioGroup
          row
          name='option'
          value={option}
          onChange={handleOptionChange}
        >
          <FormControlLabel value='create' control={<Radio />} label='Criar'></FormControlLabel>
          <FormControlLabel value='join' control={<Radio />} label='Entrar'></FormControlLabel>
        </RadioGroup>
      </FormControl>
    </Box>
  )
}
