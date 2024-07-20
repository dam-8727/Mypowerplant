import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./scenes/Topbar";
import Dashboard from './scenes/Dashboard'
import Sidebar from './scenes/Sidebar'
// import Team from "./scenes/Team";
import Home from "./scenes/Home";

import Login from "./scenes/Login";
import Admin from "./scenes/Admin";
import Plant1 from "./scenes/Plant1";
import Plant2 from "./scenes/Plant2";
import Plant3 from "./scenes/Plant3";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const isLogin = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {isLogin ? (
            <>
              <Sidebar isSidebar={isSidebar} />
              <main
                className="content"
                style={{
                  marginLeft: isSidebar ? (isSidebar ? '250px' : '80px') : 0,
                  transition: 'margin-left 0.3s',
                }}
              >
                <Topbar setIsSidebar={setIsSidebar} />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/admin" element={<Admin />} />
                  
                  <Route path="/plant1" element={<Plant1/>} />
                  <Route path="/plant2" element={<Plant2/>} />
                  <Route path="/plant3" element={<Plant3/>} />
            
                
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </main>
            </>
          ) : (
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          )}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
