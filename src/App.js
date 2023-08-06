import Login from './components/pages/login/Login'
import Register from './components/pages/register/Register'
import { Route, Routes } from "react-router-dom";
import Test  from  "./components/pages/home";
function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" exact element={<Login/>}/>
     <Route path="/login"  element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
     </Routes>
    </div>
  )
}

export default App;



