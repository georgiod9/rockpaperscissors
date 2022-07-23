import './App.scss';
import Homepage from './pages/Welcome';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (


    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={
            <Homepage />
          }></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
