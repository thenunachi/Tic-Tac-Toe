// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <div>
        <h1>Tic-tac-toe</h1>
        <p>dgfdgdfgdfgdfgfdgfgfdfdgfd</p>
        <div>3*3 box</div>
     <div className='matrix'>
      {
        <div className='eachElementRC'>{matrix(3,3)}</div>
      }
     </div>

      </div>
    </div>
  );
}
const matrix = (rowCount,colCount) =>{
  let arr =[];
  for (let i=0;i<rowCount;i++){
    let row = [];
    for (let j=0;j<colCount;j++){
      let col ="0" //pushing empty string
      row.push(col)
    }
    arr.push(row)
    console.log(arr,"arr")
  }
  return arr
}
// let matrix = Array(3).fill(0).map((row,index) =>      
//     new Array(3).fill('Row ' + (index+1)) 
// )
console.log(matrix(3,3))
export default App;
