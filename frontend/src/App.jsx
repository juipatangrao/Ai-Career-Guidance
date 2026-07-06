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


import IAS from "./component/pages/IAS";
import IPS from "./component/pages/IPS";
import Police from "./component/pages/Police";
import Army from "./component/pages/Army";
import Income from "./component/pages/Income";
import Railway from "./component/pages/Railway";
import Forest from "./component/pages/Forest";
import Food from "./component/pages/Food";
import Talathi from "./component/pages/Talathi";

import WebDeveloper from "./component/pages/WebDeveloper";
import MobileAppDeveloper from "./component/pages/MobileAppDeveloper";
import FrontendDeveloper from "./component/pages/FrontendDeveloper";
import BackendDeveloper from "./component/pages/BackendDeveloper";
import FullStackDeveloper from "./component/pages/FullStackDeveloper";
import UIUXDesigner from "./component/pages/UIUXDesigner";
import CyberSecurity from "./component/pages/CyberSecurity";
import DataAnalyst from "./component/pages/DataAnalyst";
import GameDeveloper from "./component/pages/GameDeveloper";
import Computer from "./component/pages/Computer";


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

        <Route path="/ias" element={<IAS />} />
        <Route path="/ips" element={<IPS />} />
        <Route path="/police" element={<Police />} />
        <Route path="/army" element={<Army />} />
        <Route path="/income-tax" element={<Income />} />
        <Route path="/railway" element={<Railway />} />
        <Route path="/forest" element={<Forest />} />
        <Route path="/food" element={<Food />} />
        <Route path="/talathi" element={<Talathi />} />

        <Route path="/it/web-developer" element={<WebDeveloper />} />
        <Route path="/it/mobile-app" element={<MobileAppDeveloper />} />  
        <Route path="/it/frontend" element={<FrontendDeveloper />} />
        <Route path="/it/backend" element={<BackendDeveloper />} />
        <Route path="/it/full-stack" element={<FullStackDeveloper />} />
        <Route path="/it/uiux" element={<UIUXDesigner />} />
        <Route path="/it/cyber-security" element={<CyberSecurity />} />
        <Route path="/it/data-analyst" element={<DataAnalyst />} />
        <Route path="/it/game-developer" element={<GameDeveloper />} />
        
        <Route path="/computer" element={<Computer />} />

        <Route path="/media-journalism" element={<MediaJournalism />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;