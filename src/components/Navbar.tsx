import Image from 'next/image'
import Logo from '../../public/assets/logo.jpg'

export default function Navbar() {
  return (
    <div className="flex justify-center items-center bg-custom p-5">
      <Image
        src={Logo}
        width={100}
        alt="Logo da marca"
        className="absolute left-0"
      />
      <h1 className="text-white font-bold uppercase text-2xl">
        Planning Poker
      </h1>
    </div>
  )
}
