import { WINNER_COMBOS } from "../constants";

export const checkWinner = (boardToCheck) =>{
    //revisa todas las combinaciones ganadoras
    //par ver si x u o gano
    for(const combo of WINNER_COMBOS){
      const [a,b,c]= combo;
      if(boardToCheck[a]
        && boardToCheck[a] === boardToCheck[b]
        && boardToCheck[a] === boardToCheck[c]){
          return boardToCheck[a];
        }
    }
    //si nadie gano retorna null
    return null;
  }

  export const  checkEndGame = (newBoard)=>{
    return newBoard.every((item => item !== null));
  }