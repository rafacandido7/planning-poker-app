import { Box, TextField, Typography } from '@mui/material'

interface RoomInputProps {
  roomName: string
  setRoomName: React.Dispatch<React.SetStateAction<string>>
}

export function RoomInput({roomName, setRoomName}: RoomInputProps) {
  const handleRoomNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.target.value)
  }

  return (
    <div className='w-full'>
      <Typography className='mb-2 text-prim font-medium'>Digite o nome da sala:</Typography>
      <Box>
        <TextField
          variant='standard'
          type='text'
          placeholder='Nome da Sala'
          className='w-full'
          value={roomName}
          onChange={handleRoomNameChange}
        />
      </Box>
    </div>
  )
}
