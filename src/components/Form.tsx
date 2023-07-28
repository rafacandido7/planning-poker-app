import { useState } from 'react'
import { Button } from '@mui/material'

import { PlayerNameInput } from '@/components/PlayerNameInput'
import { CreateOrJoinRoom } from '@/components/CreateOrJoinRoom'
import { RoomInput } from '@/components/RoomInput'


export function Form() {
  const [name, setName] = useState('')
  const [roomName, setRoomName] = useState('')
  const [option, setOption] = useState('create')

  const handleSubmit = () => {
    // n tem validacao de campos vazios
    const data = {
      name,
      roomName,
      option
    }

    console.log(data)
  }

  return (
    <div className='w-1/3'>
      <PlayerNameInput
        name={name}
        setName={setName}
      />
      <CreateOrJoinRoom
        option={option}
        setOption={setOption}
      />
      <RoomInput
        roomName={roomName}
        setRoomName={setRoomName}
      />
      <div className='flex justify-center mt-5'>
        <Button
          variant='contained'
          onClick={handleSubmit}
          className='bg-prim w-full'
        >
          {option === 'create' ? 'Criar' : 'Entrar'}
        </Button>
      </div>
    </div>
  )
}
