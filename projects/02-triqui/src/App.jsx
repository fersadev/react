/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import confetti from 'canvas-confetti';
import { useState } from 'react';
import './App.css';
import { Square } from './Components/Square';
import { WinnerModal } from './Components/WinnerModal';
import { TURNS } from './constants';
import { checkEndGame, checkWinner } from './logic/logic';

function App() {
  const [board,setBoard] = useState( ()=>{

    const boardFromStorage =JSON.parse(window.localStorage.getItem('board'));
    return boardFromStorage ?? Array(9).fill(null);

  });
  const [turn,setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ?? TURNS.x;
  });
  const [winner, setWinner] = useState(null);

  
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);
    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
}
 
  const updateBoard = (index)=>{
    //no actualizamos esta posición
    // si ya tiene algo o hay un ganador
    if(board[index] || winner)return;
    //actualizar el tablero
    const newBoard = [...board];
    newBoard[index]= turn;
    setBoard(newBoard);
    // cambiar el turno
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn);
    //guardar la partida en el localStorage
    window.localStorage.setItem('board',JSON.stringify(newBoard));
    window.localStorage.setItem('turn',newTurn);
    // revisar si hay un ganador
    const newWinner = checkWinner(newBoard);
    if(newWinner){
      confetti();
      setWinner(newWinner);

    }else if (checkEndGame(newBoard)){
      setWinner(false);
    }
  }
  return (
      <main className='board'>
        <h1>triqui</h1>
        <button onClick={resetGame}>Reset el juego</button>
        <section className='game'>
          {
            board.map((square,index)=>{

              return (
                <Square
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                >
                  {square}
                </Square>
              )
            })
          }
        </section>
        <section className='turn'>
          <Square
            isSelected={turn === TURNS.x}
          >{TURNS.x}</Square>
          <Square
          isSelected={turn === TURNS.o}
          >{TURNS.o}</Square>
        </section>
        <WinnerModal 
          winner={winner}
          resetGame={resetGame}
        ></WinnerModal>
      </main>
  )
}

export default App

