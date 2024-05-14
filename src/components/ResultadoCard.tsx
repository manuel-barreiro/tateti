import React from 'react'

function ResultadoCard({winner}: {winner: string}) {
  return (
    <>
    {winner !== '' && winner !== 'EMPATE' ?
        <div className='h-56 w-64 rounded-2xl border border-black flex flex-col items-center justify-around p-6'>
           <p className='font-semibold text-xl'>Ganador:</p>
           <p className='font-black text-2xl'>{winner === '➕' ? `Jugador 1` : `Jugador 2`}</p>
           <span className='font-semibold text-5xl'>{winner}</span>
        </div> : winner !== '' && winner === 'EMPATE' &&
        <div className='h-56 w-64 rounded-2xl border border-black flex flex-col items-center justify-around p-6'>
          <p className='font-semibold text-xl'>Resultado:</p>
          <p className='font-black text-2xl'>Empate</p>
          <span className='font-semibold text-5xl'>🫱🏼‍🫲🏼</span>
         </div>
      }
      </>
  )
}

export default ResultadoCard