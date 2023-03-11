import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './page/login';
import Nopage from "./page/nopage";
import Register from "./page/register";
import Dashboard from "./page/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Nopage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
