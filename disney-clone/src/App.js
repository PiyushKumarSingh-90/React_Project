//App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./COMPONENTS/Login";
import Header from './COMPONENTS/Header'; 
import Home from './COMPONENTS/Home';
import Detail from './COMPONENTS/Detail';
import './App.css';

function App() 
{
  return (
    <div className="App">

      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={ <Detail/>} />
        </Routes>

      </BrowserRouter>

    </div>
  );
} 

export default App;
