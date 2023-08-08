import { Route, Routes } from "react-router-dom";
import HomePage from './components/pages/HomePage';
import { useTheme, ThemeContext } from "./components/hooks/useTheme";
import Login from './components/pages/login/Login'
import Register from './components/pages/register/Register'
import AuthProvider from "./components/contexts/AuthContext";

function App() {
  const theme = useTheme();

  return (
    <AuthProvider>
      <div className="App">
        <ThemeContext.Provider value={theme}>
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </ThemeContext.Provider>
      </div>
    </AuthProvider>
  );
}


export default App;
