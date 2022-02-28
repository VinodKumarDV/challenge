import './App.css';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom'
import Home from './Components/Home';
import Course from './Components/CoursStructure';

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={< Home />}></Route>
          <Route path="/:coursename" element={< Course />}></Route>
          </Routes>
        </div>
      </Router>

  );
}

export default App;
