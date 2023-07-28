import Image from 'next/image'
import Cards from '../../public/assets/cards.png'


export function Presentation() {
  return (
    <div className='flex justify-center items-center'>
      <p className='text-2xl mr-14 leading-normal'>
        Juntos, vamos jogar nossas cartas
        <br />
        e revelar o sucesso
        <br />
        em cada desafio com o poder do
        <br />
        Planning Poker!
      </p>
      <Image
        src={Cards}
        alt='Foto de um Planning Poker'
        width={330}
      />
    </div>
  )
}
