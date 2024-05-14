import { useGameContext } from '@/context/GameContext';
import { CasilleroType } from '@/types';

function Casillero({ casillero }: { casillero: CasilleroType }) {

  const { board, handleClick } = useGameContext()
  
  return (
    <div 
      className='border border-black rounded-2xl w-24 h-24 flex justify-center items-center cursor-pointer' 
      onClick={() => {
        handleClick(casillero)
    }}
    >
      <span className='font-black text-5xl'>{board[casillero[0]][casillero[1]]}</span>
    </div>
  )
}

export default Casillero