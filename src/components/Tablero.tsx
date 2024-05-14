'use client'

import Casillero from './Casillero'
import { CasilleroType } from '@/types'
import { useGameContext } from '@/context/GameContext'
import ResultadoCard from './ResultadoCard'

function Tablero() {
  const casilleros: CasilleroType[] = [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]
  const { turno, setTurno, setBoard, winner, setWinner } = useGameContext()

  return (
    <main className='flex flex-col justify-evenly items-center gap-10'>

      {/* Mostrar de quién es el turno */}
      {winner === '' &&
        <div>
          <p>Turno: <span className='font-black'>{turno === '➕' ? `Jugador 1 (${turno})` : `Jugador 2 (${turno})`}</span></p>
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


      {/* Botón de reseteo */}
      <button 
        className='border border-black bg-gray-300 hover:scale-105 hover:bg-gray-500 hover:text-gray-300 transition-all ease-in-out rounded-2xl px-5 py-2'
        onClick={() => {
          setTurno('➕')
          setBoard([['','',''],['','',''],['','','']])
          setWinner('')
        }}
      >
        {winner !== '' ? '¡Revancha!' : 'Reiniciar'}
      </button>


    </main>
    
  )
}

export default Tablero