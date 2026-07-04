import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Home from "./component/Home";
import Government from "./component/Government";
import BankingANDFinance from "./component/BankingANDFinance";
import Law from "./component/Law";
import Aviation from "./component/Aviation";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/government" element={<Government />} />
        <Route path="/banking-and-finance" element={<BankingANDFinance />} />
        <Route path="/law" element={<Law />} />
        <Route path="/aviation" element={<Aviation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
