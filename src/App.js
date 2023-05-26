
import './App.css';
import May from './components/May';
import June from './components/June';
import July from './components/July';

function App() {
  
  const monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const dayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  const d = new Date();
  let month = monthArray[d.getMonth()];
  let year = d.getFullYear();
  let date = d.getDate();
  let day = dayArray[d.getDay()];

  // let gridboxes = new Array(42).fill(0)

  return (
    <div className="App">
      {/* <header className="App-header">
        {month + ' ' + year}
      </header> */}
      <div className='today'>
        {`Today is ${day}, ${month} ${date}`}
      </div>
      {/* <div className='flexContainer'>
        {dayArray.map(weekday=><div>{weekday.slice(0,3)}</div>)}
      </div>
      <div className='gridContainer'>
        {gridboxes.map(()=> <div className="gridItem"></div>)}
      </div> */}
      <May dayArray={dayArray} date={date} month={month}></May>
      <June dayArray={dayArray} date={date} month={month}></June>
      <July dayArray={dayArray} date={date} month={month}></July>

    </div>
  );
}

export default App;
