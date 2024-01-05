import logo from './logo.svg';
import './App.css';
import Home from './Componenet/Home';
import { Routes , Route } from 'react-router-dom';
import ReduxCounter from './Componenet/ReduxReact/ReduxCounter';

function App() {
  console.log("Inside app")
  return (
    <div>
      <Routes>
      <Route exact path = "/" element={<Home/>}/>
      <Route path='/redux-counter' element={<ReduxCounter />} />



      </Routes>
  
    </div>
 
    // <div className="App">



     
  
  );
}

export default App;
