import { HashRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

import useLocalStorage from "use-local-storage";
import React from "react";

//Component
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";

// Pages
import Board from "./pages/Board";
import Login from "./pages/Login";
import Home from "./pages/Home"; 

function App() {
  const [token, setToken] = useLocalStorage("token", null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <HashRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/Minimalist_Kanban" element={<Navbar/>}> */}
          
            {/* <Route index element={<Home/>}/> */}
            <Route path="/" element={<Home />}/>
            <Route element={<Login/>} path="/login" />
            <Route element={
                <RequireAuth>
                  <Board/>
                </RequireAuth>
              }
              // /Minimalist_Kanban
              path="/dashboard"
            />
          {/* </Route> */}
        </Routes>
      </HashRouter>
    </AuthContext.Provider>
  )
}

export default App
