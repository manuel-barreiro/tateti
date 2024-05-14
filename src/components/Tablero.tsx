import Casillero from './Casillero'
import { CasilleroType } from '@/types'
import { useGameContext } from '@/context/GameContext'
import Image from 'next/image'
import Link from 'next/link'
import ResultadoCard from './ResultadoCard'



function Tablero() {
  const casilleros: CasilleroType[] = [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]

  const { turno, setTurno, setBoard, winner, setWinner } = useGameContext()

  return (
    <main className='flex flex-col justify-evenly items-center gap-10'>
      <div className='flex gap-3 items-center'>
      <Link href={'https://abstract.dev/'} target='_blank'>
        <Image src={'/abstract.webp'} width={100} height={200} alt='abstract logo' className='hover:scale-105 transition-all ease-in-out cursor-pointer'/>
      </Link>
      </div>
      {/* Mostrar de quién es el turno */}
      {winner === '' &&
        <div>
          <p>Turno: <span className='font-black'>{turno === 'X' ? `Jugador 1 (${turno})` : `Jugador 2 (${turno})`}</span></p>
        </div>
      }

      {/* Tablero */}
      {winner === '' &&
        <div className='grid grid-cols-3 gap-5'>
          {casilleros.map((casillero,index) => <Casillero key={index} casillero={casillero} />)}
        </div>
      }

      {/* Banner que muestra resultado */}
      <ResultadoCard winner={winner} />
      <div>
        <button 
          className='border border-black bg-gray-300 hover:scale-105 hover:bg-gray-500 hover:text-gray-300 transition-all ease-in-out rounded-2xl px-5 py-2'
          onClick={() => {
            setTurno('X')
            setBoard([['','',''],['','',''],['','','']])
            setWinner('')
          }}
        >
          Reiniciar
        </button>
      </div>

      <div className='flex items-center gap-3'>
        <span className='font-semibold text-md'>By </span>
        <Link href={'https://www.mbarreiro.dev/'} target='_blank'>
          <Image src={'/mb.png'} width={70} height={150} alt='mb logo' className='hover:scale-105 transition-all ease-in-out cursor-pointer' />
        </Link>
      </div>
    </main>
    
  )
}

export default Tablero