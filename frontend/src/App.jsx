import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Home from "./component/Home";
import Government from "./component/Government";
import IT from "./component/IT";
import BankingANDFinance from "./component/BankingANDFinance";
import Law from "./component/Law";
import Aviation from "./component/Aviation";
import HotelManagement from "./component/HotelManagement";
import MerchantNavy from "./component/MerchantNavy";
import Engineering from "./component/Engineering";
import Doctor from "./component/Doctor";
import MediaJournalism from "./component/MediaJournalism";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/government" element={<Government />} />
        <Route path="/it" element={<IT />} />
        <Route
          path="/banking-and-finance"
          element={<BankingANDFinance />}
        />
        <Route path="/law" element={<Law />} />
        <Route path="/aviation" element={<Aviation />} />
        <Route path="/hotel-management" element={<HotelManagement />} />
        <Route path="/merchant-navy" element={<MerchantNavy />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/media-journalism" element={<MediaJournalism />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;