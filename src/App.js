import Navbar from './components/Navbar/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/home';
function App() {
  return (
    <div>
        <Navbar/> 
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
    </div>
  );
}

export default App; 
