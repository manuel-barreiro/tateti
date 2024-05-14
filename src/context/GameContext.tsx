'use client'

import { CasilleroType } from '@/types'
import JSConfetti from 'js-confetti'
import { createContext, useContext, useEffect, useState } from 'react'

type GameContext = {
  setTurno: React.Dispatch<React.SetStateAction<string>>
  turno: string
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>
  board: string[][]
  handleClick: (casillero: CasilleroType) => void
  winner: string
  handleWinner: () => void
  setWinner: React.Dispatch<React.SetStateAction<string>>
}

// Creo el context
const GameContext = createContext({} as GameContext)

export function useGameContext(): GameContext {
  return useContext(GameContext)
}

type GameContextProps = {
  children: React.ReactNode
}

export function GameProvider ({ children }: GameContextProps): JSX.Element {

  //Almacenar en un state el estado del tablero, [['X','O','X'],['X','O','X'],['X','O','X']]
  const [board, setBoard] = useState([['','',''],['','',''],['','','']])
  const [turno, setTurno] = useState('X')
  const [winner, setWinner] = useState('')
  
  function handleClick(casillero: CasilleroType) {
    // Hacer una copia del tablero actual
    const newBoard = board.map((fila, indiceFila) => {
    // Si la fila es la fila del casillero clickeado
    if (indiceFila === casillero[0]) {
      // Actualizar solo casillero clickeado
      return fila.map((valor, indiceColumna) => {
        // Si es la columna del casillero clickeado
        if (indiceColumna === casillero[1] && valor === '') {
          // Colocar el valor del turno actual ('X' o 'O')
          setTurno(prev => prev === 'X' ? 'O' : 'X')
          return turno;  
        } else {
          // Mantener el valor de las otras casillas
          return valor;
        }
      });
    } else {
      // Mantener las filas que no son la del casillero clickeado
      setTurno(prev => prev === 'X' ? 'O' : 'X')
      return fila;
      }
    });

    // Implementar setBoard para actualizar el estado del tablero
    setBoard(newBoard)
  }

  function handleWinner() {

    //Chequeo ganador por filas iguales
    for (let i = 0; i < board.length; i++) {
      if (board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][0] !== '') {
        setWinner(board[i][0])
        return
      }
    }

    //Chequeo ganador por columnas iguales
    for (let i = 0; i < board.length; i++) {
      if (board[0][i] === board[1][i] && board[0][i] === board[2][i] && board[0][i] !== '') {
        setWinner(board[0][i])
        return
      }
    }

    //Chequeo ganador por diagonales
    if (
      // Primera diagonal
      (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] !== '') ||
      // Segunda diagonal
      (board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[0][2] !== '')
      ) {
        setWinner(board[1][1])
        return
      }

    //Chequeo empate 
    let sum = 0
    for (let i = 0; i < 3; i++) {
      // console.log('i',i)
      for (let j = 0; j < 3; j++) {
        // console.log('j',j)
        if (board[i][j] !== '') {
          sum = sum + 1
        } 
      }  
    }
    if (sum === 9) {
      setWinner('EMPATE')
    }
  }
  
  //Cada vez que cambia el estado del tablero chequeo si hay ganador
  useEffect(() => {
    handleWinner()
  }, [board])
  
  useEffect(() => {
    // console.log(winner)
    if (winner !== '') {
      const jsConfetti = new JSConfetti()
      jsConfetti.addConfetti({
        emojis: winner === 'X' ? ['❌'] : winner === 'O' ? ['⭕'] : winner === 'EMPATE' ? ['🫱🏼‍🫲🏼'] : [],
        emojiSize: 60,
        confettiNumber: 200,
      })
    }
  }, [winner])


  // // Read localStorage
  // useEffect(() => {
  //   const pokemonLS: string | null = localStorage.getItem('my_pokemon')
  //   if (pokemonLS) {
  //     const myPokemonLS = JSON.parse(pokemonLS)
  //     if (myPokemonLS.length > 0) {
  //       setMyPokemon(myPokemonLS)
  //     }
  //   } else {
  //     setMyPokemon([])
  //   }
  // }, [])

  // // Set localStorage on state change
  // useEffect(() => {
  //   localStorage.setItem('my_pokemon', JSON.stringify(myPokemon))
  // }, [myPokemon])


  return (
    <GameContext.Provider value={{ setTurno, turno, setBoard, board, handleClick, winner, handleWinner, setWinner }}>
      {children}
    </GameContext.Provider>
  )
}