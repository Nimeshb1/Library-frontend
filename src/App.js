import "./App.css";
import { Regrestration } from "./comp/login_regrestration/Regrestration.js";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { Login } from "./comp/login_regrestration/Login";
import Dashboard from "./dashboard/Dashboard";
import AllBooks from "./dashboard/AllBooks";
import AddBooks from "./dashboard/AddBooks";
import MyBooks from "./dashboard/MyBooks";
import Transactions from "./dashboard/Transactions";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/regrestration" element={<Regrestration />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/allbooks" element={<AllBooks />} />
          <Route path="/addbooks" element={<AddBooks />} />
          <Route path="/mybooks" element={<MyBooks />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
