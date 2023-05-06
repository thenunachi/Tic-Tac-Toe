// import logo from './logo.svg';
import car from './car.mp4'
import './App.css';
import React, { useState, useEffect } from 'react';






function App() {

  const [board, setBoard] = useState([["", "", ""],
  ["", "", ""],
  ["", "", ""]]);
  const [player1, setPlayer1] = useState('X');
  const [player2, setPlayer2] = useState('O');
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [winnerMessage, setWinnerMessage] = useState('');


  const handleCellClick = (row, col) => {
    if (board[row][col] === "") {
      const newBoard = [...board]
      newBoard[row][col] = currentPlayer
      setBoard(newBoard)
      // setWinner(currentPlayer);
      // setWinnerMessage(`${currentPlayer} wins!`);
      // console.log(board, "board")
      const winner = findWin(newBoard);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      setWinner(winner);

      if (winner) {
        const winnerName = winner === 'X' ? player1 : player2;
        setWinnerMessage(`${winnerName} wins!`);
      }
    }
    // if  (winner !== null){
    //   alert(`${winner} wins!`);
    //   console.log(`${winner} wins!`)
    // }
    // else{
    //   setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
    // }

    // console.log(currentPlayer, "currentPlayer")
    //In the case of setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'), the condition is currentPlayer === 'X', 
    //which checks if the current player is 'X'. If the condition is true, the operator returns 'O', which sets the next player to 'O'. 
    //If the condition is false (i.e., the current player is 'O'), the operator returns 'X',
    // which sets the next player to 'X'. This effectively toggles between 'X' and 'O' on each turn.
  }

  //  const winner = findPlayerWins(board)
  //  console.log(winner,"winner")
  //  if (winner === 'X') {
  //   console.log('Player X wins!');
  // } else if (winner === 'O') {
  //   console.log('Player O wins!');
  // } else {
  //   console.log('No winner yet');
  // }
const srcVideo = car
  return (

    <div id="rootDiv">
      {/* <video  autoPlay loop muted id="video"> */}
        {/* <source src={srcVideo} type="video/mp4" /> */}
          {/* <source src="https://designerapp.officeapps.live.com/designerapp/Media.ashx/?id=7b7f6e03-86a5-45b1-aa4e-1064b0fe8dff.mp4&fileToken=d9845440-514b-40b7-b79d-534660ebc7f2&dcHint=WestUS2" type="video/ogg" /> */}
            
          {/* </video> */}
          <main>
          <h2>{currentPlayer}'s turn</h2>
          <label>Player1:</label>
          <input type="text" value={player1} onChange={(e) => setPlayer1(e.target.value)} />
          <label>Player2:</label>
          <input type="text" value={player2} onChange={(e) => setPlayer2(e.target.value)} />
          {winnerMessage && <h2>{winnerMessage}</h2>}
          <table >
            <tbody>
              {board.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, colIndex) => (

                    <td key={`${rowIndex}-${colIndex}`} className="cell" onClick={() => handleCellClick(rowIndex, colIndex)}>
                      {cell}

                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          </main>
          

        </div>


        );
}



const createMatrix = (rows, cols, initialValue) => {
          let arr = new Array(rows)
        for (let i = 0; i < rows; i++) {
          arr[i] = new Array(cols).fill(initialValue)

        }
        return arr
}
// console.log(createMatrix(3, 3, "0"))
// const matrix = (rowCount, colCount) => {
          //   let arr = [];
          //   for (let i = 0; i < rowCount; i++) {
          //     let row = [];
          //     for (let j = 0; j < colCount; j++) {
          //       let col = "0" //pushing empty string
          //       row.push(col)
          //     }
          //     arr.push(row)
          //     console.log(arr, "arr")
          //   }
          //   return arr
          // }
          // let matrix = Array(3).fill(0).map((row,index) =>      
          //     new Array(3).fill('Row ' + (index+1)) 
          // )
          // console.log(matrix(3, 3))


          // to win diagnol,diagnol, rows,rows,rows,cols,cols,cols -> check 8times
          // rc-> 0    1      2
          // 0   0,0   0,1   0,2
          // 1   1,0   1,1   1,2
          // 2   2,0   2,1   2,2
          // const findPlayerWins = (board) => {
          //   // "X" is human and "O" is computer
          //   for (let i = 0; i < 3; i++) {
          //     for (let j = 0; j < 3; j++) {
          //       if (board[i][j] === "") {
          //         board[i][j] = "X"

          //         if (checkWin(board, "X")) {
          //           return [i, j] // returning [i,j] to highlight the cells of winning person
          //         }
          //         else {
          //           board[i][j] = ""
          //         }
          //       }

          //     }
          //   }

          //   for (let i = 0; i < 3; i++) {
          //     for (let j = 0; j < 3; j++) {
          //       if (board[i][j] === "") {
          //         board[i][j] = "O";

          //         if (checkWin(board, "O")) {
          //           return [i, j]
          //         }
          //         else {
          //           board[i][j] = ""
          //         }
          //       }

          //     }
          //   }
          //   const emptyCell = []
          //   for (let i = 0; i < 3; i++) {
          //     for (let j = 0; j < 3; j++) {
          //       if (board[i][j] === "") {
          //         emptyCell.push([i, j])
          //       }

          //     }
          //   }
          //   const randomIndex = Math.floor(Math.random() * emptyCell.length) // gives index between 0 to length of emptycell
          //   return emptyCell[randomIndex] // is the empty cell. This is to help computer to find cells if it is not winning to find empty cell to have "O"
          // }

          // const checkWin = (board, player) => {
          //   for (let i = 0; i < 3; i++) { //row starts at 0 and goes till 2
          //     if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
          //       return true
          //     }
          //   }
          //   for (let j = 0; j < 3; j++) { //col starts at 0 and goes till 2
          //     if (board[0][j] === player && board[1][j] === player && board[2][j] === player) {
          //       return true
          //     }
          //   }
          //   //  check diagnols from top left to right
          //   if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
          //     return true
          //   }
          //   //  checking diagnols from  top right to left
          //   if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
          //     return true
          //   }
          //   return false
          // }
          function findWin(board) {
            // Check rows
            for (let i = 0; i < 3; i++) {
              if (board[i][0] !== "" && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
                return board[i][0];
              }
            }

            // Check columns
            for (let i = 0; i < 3; i++) {
              if (board[0][i] !== "" && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
                return board[0][i];
              }
            }

            // Check diagonals
            if (board[0][0] !== "" && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
              return board[0][0];
            }
            if (board[0][2] !== "" && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
              return board[0][2];
            }

            // No winner
            return null;
          }
export default App;
