import { useRouter } from 'next/navigation'
import { Button } from '@mui/material'
import { SelectValueProps } from './SelectValue'

export function GameController({ setValue }: SelectValueProps) {
  const router = useRouter()

  const handleExitRoom = () => {
    router.push('/')
  }

  const handleResetValue = () => {
    setValue(0)
  }

  const handleFlipCards = () => {
    console.log('Flip')
    // do the math calculation
  }

  return (
    <div className='flex flex-row gap-4'>
      <Button
        variant='contained'
        className='w-full mb-2 bg-red-600'
        color='error'
        onClick={handleExitRoom}
      >
        Sair
      </Button>
      <Button
        variant='contained'
        className='w-full mb-2 bg-orange-400 border-black'
        color='warning'
        onClick={handleResetValue}
      >
        Reset
      </Button>
      <Button
        variant='contained'
        className='w-full mb-2 bg-green-600'
        color='success'
        onClick={handleFlipCards}
      >
        Flip
      </Button>
    </div>
  )
}


