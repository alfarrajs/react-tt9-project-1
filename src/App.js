import Login from './components/pages/login/Login'
import Register from './components/pages/register/Register'
import { Route, Routes } from "react-router-dom";
import HomePage from './components/pages/HomePage/index';
function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" exact element={<Login/>}/>
     <Route path="/login"  element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/home" element={<HomePage/>}></Route>

     </Routes>
    </div>
  )
}

export default App;



