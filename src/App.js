import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddLanguageForm from './components/Screen/Addlanguage';
import Addmovie from './components/Screen/Addmovie';
import Editmovie from './components/Screen/Editmovie';
function App() {
  return (
    <div className="App">
     <AddLanguageForm/>
<Addmovie/>
<Editmovie/>
      
    </div>
  );
}

export default App;
