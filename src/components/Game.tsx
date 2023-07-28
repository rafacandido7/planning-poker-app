import { useState } from 'react'

import { SelectValue } from '@/components/SelectValue'
import { GameController } from '@/components/GameController'
import { PlayersPoints } from '@/components/PlayersPoints'

export function Game() {
  const [value, setValue] = useState(0)

  return (
    <div className='w-1/3'>
      <PlayersPoints />
      <SelectValue value={value} setValue={setValue} />
      <GameController setValue={setValue} />
    </div>
  )
}

{/*✅
  Room Name
  Players Cards
  Cards (Fibonacci) ✅
  Buttons (Flip [admin], Reset [admin], Leave [player])) ✅
*/}
