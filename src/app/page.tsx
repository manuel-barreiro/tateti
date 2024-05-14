"use client"

import Tablero from "@/components/Tablero";
import { useState } from "react";

export default function Home() {

  //Componentes:
  //Tablero de 3x3
  //Cruz o Circulo

  //Funcionalidad:
  //Almacenar en un state el estado del tablero, [['X','O', 'X'],[],[]]
  //Almacenar en un state el turno: Se alterna, primer click es cruz, despues circulo, etc.
  //Ganador: Tres circulos o tres cruces al lado o en diagonal: Pensar y generar esa lógica
  //Proporcionar un botón para reiniciar el juego, permitiendo a los jugadores comenzar una nueva partida.
  //Mostrar el mensaje del ganador o empate al final del juego: Parte de la lógica

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <Tablero />
    </main>
  );
}
