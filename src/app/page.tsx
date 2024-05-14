import Tablero from "@/components/Tablero";
import Link from "next/link";
import Image from 'next/image'

export default function Home() {

  //Componentes:
  //Tablero de 3x3
  //Cruz o Circulo
  //Card que muestre resultado

  //Funcionalidad:
  //Almacenar en un state el tablero, [['X','O', 'X'],[],[]]
  //Almacenar en un state el turno: Se alterna, primer click es cruz, despues circulo, etc.
  //Ganador: Tres circulos o tres cruces al lado o en diagonal: Pensar y generar esa lógica
  //Proporcionar un botón para reiniciar el juego, permitiendo a los jugadores comenzar una nueva partida.
  //Mostrar el mensaje del ganador o empate al final del juego: Parte de la lógica

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8">
        <Link href={'https://abstract.dev/'} target='_blank'>
          <Image src={'/abstract.webp'} width={100} height={100} priority alt='abstract logo' className='hover:scale-105 transition-all ease-in-out cursor-pointer'/>
        </Link>

      <Tablero />

      <div className='flex items-center gap-3'>
        <span className='font-semibold text-md'>By </span>
        <Link href={'https://www.mbarreiro.dev/'} target='_blank'>
          <Image src={'/mb.png'} width={70} height={150} alt='mb logo' priority className='hover:scale-105 transition-all ease-in-out cursor-pointer' />
        </Link>
      </div>
    </main>
  );
}
