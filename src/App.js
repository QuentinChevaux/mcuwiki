import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Page/Home';
import Lexique from './Page/Lexique';
import Films from './Page/Films';
import Series from './Page/Series';


function App() {

  return (

    <div className="App">
     
      <BrowserRouter>
      
        <Routes>

          <Route path='/' element={<Home />} />

          <Route path="lexique" element={<Lexique />} />

          <Route path='films' element={<Films />} />

          <Route path='series' element={<Series />} />

        </Routes>

      </BrowserRouter>

    </div>

  );

}

export default App;
