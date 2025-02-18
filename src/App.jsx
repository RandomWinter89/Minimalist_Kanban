import { BrowserRouter, Route, Routes } from "react-router-dom";
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
      <BrowserRouter>
        <Routes>
          <Route path="/Minimalist_Kanban" element={<Navbar/>}>
            <Route index element={<Home/>}/>
            <Route element={<Login/>} path="/Minimalist_Kanban/login" />
            <Route element={
                <RequireAuth>
                  <Board/>
                </RequireAuth>
              }
              path="/Minimalist_Kanban/dashboard"
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
