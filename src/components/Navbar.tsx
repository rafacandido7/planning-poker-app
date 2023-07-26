import { Typography } from '@mui/material'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <div className='flex justify-center items-center bg-custom p-5'>
        <Link href='/'>
          <Typography className='text-white font-bold uppercase text-2xl'>
            Planning Poker
          </Typography>
        </Link>
      </div>
    </>
  )
}
