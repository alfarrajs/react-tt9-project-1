import { createContext, useContext, useState } from 'react';
import Login from './components/pages/login/Login'
import Register from './components/pages/register/Register'
import { Route, Routes } from "react-router-dom";
import HomePage from './components/pages/HomePage/index';


export const ThemeContext = createContext(null);

function App() {
  const [theme,setTheme] = useState("light");
  return (
    <div className="App">
      <ThemeContext.Provider value={{theme,setTheme}}>
      <Routes>
      <Route path="/" exact element={<Login/>}/>
      <Route path="/login"  element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/home" element={<HomePage/>}></Route>
      </Routes>
      </ThemeContext.Provider>
    
    </div>
  )
}

export default App;



