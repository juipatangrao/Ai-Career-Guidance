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

import ScienceResearch from "./component/ScienceResearch";
import SpaceAstronomy from "./component/SpaceAstronomy";
import Environmental from "./component/Environmental";
import MediaJournalism from "./component/MediaJournalism";
import Design from "./component/Design";

import IAS from "./pages/IAS";
import IPS from "./pages/IPS";
import Police from "./pages/Police";
import Army from "./pages/Army";
import Income from "./pages/Income";
import Railway from "./pages/Railway";
import Forest from "./pages/Forest";
import Food from "./pages/Food";
import Talathi from "./pages/Talathi";

import WebDeveloper from "./pages/WebDeveloper";
import MobileAppDeveloper from "./pages/MobileAppDeveloper";
import FrontendDeveloper from "./pages/FrontendDeveloper";
import BackendDeveloper from "./pages/BackendDeveloper";
import FullStackDeveloper from "./pages/FullStackDeveloper";
import UIUXDesigner from "./pages/UIUXDesigner";
import CyberSecurity from "./pages/CyberSecurity";
import DataAnalyst from "./pages/DataAnalyst";
import GameDeveloper from "./pages/GameDeveloper";

//Banking and Finance pages
import CharteredAccountant from "./pages/Charted-Accountant";
import CompanySecretary from "./pages/CompanySecretary";
import TaxConsultant from "./pages/TaxConsultant";
import InvestmentBanker from "./pages/InvestmentBanker";
import CreditAnalyst from "./pages/CreditAnalyst";
import BankManager from "./pages/BankManager";

//Law pages
import CriminalLawyer from "./pages/CriminalLawyer";
import CorporateLawyer from "./pages/CorporateLawyer";
import FamilyLawyer from "./pages/FamilyLawyer";
import CyberLawyer from "./pages/CyberLawyer";
import TaxLawyer from "./pages/TaxLawyer";
import Judge from "./pages/Judge";

//Aviation pages
import CommercialPilot from "./pages/CommercialPilot";
import AirForcePilot from "./pages/AirForcePilot";
import CabinCrew from "./pages/CabinCrew";
import FlightInstructor from "./pages/FlightInstructor";
import AirportManager from "./pages/AirportManager";
import AirTrafficController from "./pages/AirTrafficController";

//Science and Research pages
import Scientist from "./pages/Scientist";
import Physicist from "./pages/Physicist";
import Chemist from "./pages/Chemist";
import Biologist from "./pages/Biologist";
import Microbiologist from "./pages/Microbiologist";
import Biotechnologist from "./pages/Biotechnologist";

//Engineering pages
import CivilEngineer from "./pages/Civil";
import MechanicalEngineer from "./pages/Mechanical";
import Computer from "./pages/Computer";
import ElectricalEngineer from "./pages/Electrical";
import ChemicalEngineer from "./pages/Chemical";
import AerospaceEngineer from "./pages/Aerospace";
import AutomobileEngineer from "./pages/Automobile";
import RoboticsEngineer from "./pages/Robotics";

//Hotel Management pages
import HotelManager from "./pages/HotelManager";
import Chef from "./pages/Chef";
import EventManager from "./pages/EventManager";
import CafeteriaManager from "./pages/CateringManager";

//environmental
import EnvironmentalScientist from "./pages/EnvironmentalScientist";
import WildlifeBiologist from "./pages/WildlifeBiologist";
import ForestOfficer from "./pages/ForestOfficer";

//navy
import DeckOfficer from "./pages/DeckOfficer";
import MarineEngineer from "./pages/MarineEngineer";
import ElectroTechnicalOfficer from "./pages/ElectroTechnicalOfficer";
import Captain from "./pages/Captain";
import PortManager from "./pages/PortManager";

//Designer
import GraphicDesigner from "./pages/GraphicDesigner";
import InteriorDesigner from "./pages/InteriorDesigner";
import FashionDesigner from "./pages/FashionDesigner";
import ProductDesigner from "./pages/ProductDesigner";

//Space
import Astrophysicist from "./pages/Astrophysicist";
import SpaceScientist from "./pages/SpaceScientist";
import Astronaut from "./pages/Astronaut";
import SatelliteEngineer from "./pages/SatelliteEngineer";

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
        <Route path="/banking-and-finance" element={<BankingANDFinance />} />
        <Route path="/law" element={<Law />} />
        <Route path="/aviation" element={<Aviation />} />
        <Route path="/hotel-management" element={<HotelManagement />} />
        <Route path="/merchant-navy" element={<MerchantNavy />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/science-research" element={<ScienceResearch />} />
        <Route path="/ias" element={<IAS />} />
        <Route path="/ips" element={<IPS />} />
        <Route path="/police" element={<Police />} />
        <Route path="/army" element={<Army />} />
        <Route path="/income-tax" element={<Income />} />
        <Route path="/railway" element={<Railway />} />
        <Route path="/forest" element={<Forest />} />
        <Route path="/food" element={<Food />} />
        <Route path="/talathi" element={<Talathi />} />
        <Route path="/media-and-journalism" element={<MediaJournalism />} />
        <Route path="/space-astronomy" element={<SpaceAstronomy />} />
        <Route path="/environmental" element={<Environmental />} />
        <Route path="/design" element={<Design />} />
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
        {/* Banking and Finance routes */}
        <Route path="/banking-finance/ca" element={<CharteredAccountant />} />
        <Route path="/banking-finance/cs" element={<CompanySecretary />} />
        <Route path="/banking-finance/tax" element={<TaxConsultant />} />
        <Route path="/banking-finance/ib" element={<InvestmentBanker />} />
        <Route
          path="/banking-finance/credit-analyst"
          element={<CreditAnalyst />}
        />
        <Route path="/banking-finance/bm" element={<BankManager />} />
        {/* Law */}
        <Route path="/law/criminal-lawyer" element={<CriminalLawyer />} />
        <Route path="/law/corporate-lawyer" element={<CorporateLawyer />} />
        <Route path="/law/family-lawyer" element={<FamilyLawyer />} />
        <Route path="/law/cyber-lawyer" element={<CyberLawyer />} />
        <Route path="/law/tax-lawyer" element={<TaxLawyer />} />
        <Route path="/law/judge" element={<Judge />} />
        {/* Aviation */}
        <Route path="/aviation/cp" element={<CommercialPilot />} />
        <Route path="/aviation/afp" element={<AirForcePilot />} />
        <Route path="/aviation/cc" element={<CabinCrew />} />
        <Route path="/aviation/fi" element={<FlightInstructor />} />
        <Route path="/aviation/am" element={<AirportManager />} />
        <Route path="/aviation/atc" element={<AirTrafficController />} />
        {/* Science and Research */}
        <Route path="/science-research/scientist" element={<Scientist />} />
        <Route path="/science-research/physicist" element={<Physicist />} />
        <Route path="/science-research/chemist" element={<Chemist />} />
        <Route path="/science-research/biologist" element={<Biologist />} />
        <Route
          path="/science-research/microbiologist"
          element={<Microbiologist />}
        />
        <Route
          path="/science-research/biotechnologist"
          element={<Biotechnologist />}
        />
        {/* Engineering */}
        <Route path="/engineering/civil" element={<CivilEngineer />} />
        <Route
          path="/engineering/mechanical"
          element={<MechanicalEngineer />}
        />
        <Route path="/engineering/computer" element={<Computer />} />
        <Route
          path="/engineering/electrical"
          element={<ElectricalEngineer />}
        />
        <Route path="/engineering/chemical" element={<ChemicalEngineer />} />
        <Route path="/engineering/aerospace" element={<AerospaceEngineer />} />
        <Route
          path="/engineering/automobile"
          element={<AutomobileEngineer />}
        />
        <Route path="/engineering/robotics" element={<RoboticsEngineer />} />
        {/* Hotel Management */}
        <Route
          path="/hotel-management/hotel-manager"
          element={<HotelManager />}
        />
        <Route path="/hotel-management/chef" element={<Chef />} />
        <Route
          path="/hotel-management/event-manager"
          element={<EventManager />}
        />
        <Route
          path="/hotel-management/cafeteria-manager"
          element={<CafeteriaManager />}
        />
        {/*Environment*/}
        <Route
          path="/environmental/environmentalscientist"
          element={<EnvironmentalScientist />}
        />
        <Route
          path="/environmental/wildlifebiologist"
          element={<WildlifeBiologist />}
        />
        <Route
          path="/environmental/forestofficer"
          element={<ForestOfficer />}
        />
        {/* Merchant Navy */}
        <Route path="/merchant-navy/deck-officer" element={<DeckOfficer />} />
        <Route path="/merchant-navy/marine-engineer" element={<MarineEngineer />}/>
        <Route path="/merchant-navy/electro-technical-officer" element={<ElectroTechnicalOfficer />}/>
        <Route path="/merchant-navy/captain" element={<Captain />} />
        <Route path="/merchant-navy/port-manager" element={<PortManager />} />

        {/*Design */}
        <Route path="/Design/graphic-designer" element={<GraphicDesigner/>}>
        </Route>
        <Route path="/Design/fashion-designer" element={<FashionDesigner/>}>
        </Route>
        <Route path="/Design/interior-designer" element={<InteriorDesigner/>}>
        </Route>
        <Route path="/Design/product-designer" element={<ProductDesigner/>}>
        </Route>

        {/*Space*/}
        <Route path="/space-astronomy/astronaut" element={<Astronaut/>}/>
        <Route path="/space-astronomy/space-scientist" element={<SpaceScientist/>}/>
        <Route path="/space-astronomy/astrophysicist" element={<Astrophysicist/>}/>
        <Route path="/space-astronomy/satellite-engineer" element={<SatelliteEngineer/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
