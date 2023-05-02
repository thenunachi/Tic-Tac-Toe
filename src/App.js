// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div>
        <h1>Tic-tac-toe</h1>
        {/* <p>dgfdgdfgdfgdfgfdgfgfdfdgfd</p>
        <div>3*3 box</div> */}
        <div className="matrix-container">
          {createMatrix(3, 3, "").map((row, rowIndex) =>
            row.map((colCell, colIndex) => (
              
              <div key={`${rowIndex}-${colIndex}`} 
                className="cell"
              >

                { colCell }
              </div>
            ))
          )}
          
        </div>


      </div>
    </div>
  );
}


const createMatrix = (rows,cols,initialValue)=>{
  let arr = new Array(rows)
  for (let i=0;i<rows;i++){
    arr[i] = new Array(cols).fill(initialValue)
    // console.log(new Array(cols).fill(initialValue),"cols")
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

const checkWin = (board,player) =>{
for(let i= 0;i<3;i++){ //row starts at 0 and goes till 2
if(board[i][0] === player && board[i][1] === player && board[i][2] === player){
  return true
}
}
for(let j= 0;j<3;j++){ //col starts at 0 and goes till 2
  if(board[0][j] === player && board[1][j] === player && board[2][j] === player){
    return true
  }
  }
  //  check diagnols from top left to right
if(board[0][0] === player && board[1][1] === player && board[2][2] === player){
  return true
}
//  checking diagnols from  top right to left
if(board[0][2] === player && board[1][1] === player && board[2][0] === player){
  return true
}
}
export default App;
