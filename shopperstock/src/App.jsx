import logo from './logo.svg';
import './App.css';
import Home from './Componenet/Home';
import { Routes , Route } from 'react-router-dom';

function App() {
  console.log("Inside app")
  return (
    <div>
      <Routes>
      <Route exact path = "/" element={<Home/>}/>

      </Routes>
  
    </div>
 
    // <div className="App">



     
  
  );
}

export default App;
