import React from 'react'

function ResultadoCard({winner}: {winner: string}) {
  return (
    <>
    {winner !== '' && winner !== 'EMPATE' ?
        <div className='h-56 w-64 rounded-2xl border border-black flex flex-col items-center gap-10 p-6'>
           <p className='font-semibold text-xl'>Ganador:</p>
           <p className='font-black text-2xl'>{winner === 'X' ? `Jugador 1 (${winner})` : `Jugador 2 (${winner})`}</p>
           <p className='font-semibold text-xl'>¡Felicitaciones!</p>
        </div> : winner !== '' && winner === 'EMPATE' &&
        <div className='h-56 w-64 rounded-2xl border border-black flex flex-col items-center gap-10 p-6'>
          <p className='font-semibold text-xl'>Resultado:</p>
          <p className='font-black text-2xl'>Empate</p>
          <p className='font-semibold text-xl'>Revancha!</p>
         </div>
      }
      </>
  )
}

export default ResultadoCard