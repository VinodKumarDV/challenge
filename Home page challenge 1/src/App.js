import Home from './components/home/Home'
import './App.css'


function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

 export default App;


// import React from 'react'

// function App() {
//   let date = new Date(document.getElementById("date").value)
//   let duration = parseInt(document.getElementById('duration').value)
//   let hrsafteradd = date.setHours(date.getHours() + duration);
//   let dateafteradd = new Date(hrsafteradd);
//   document.getElementById('toDate').innerHTML = dateafteradd;

//   document.getElementById('duration').addEventListener('keyup')


//   return (
//     <div>
//       <input type="datetime-local" name="" id="date" />
//       <input type="number" name="" id="duration" placeholder="duration" />
//       <span name="" id="toDate" />
//     </div>
//   )
// }

// export default App