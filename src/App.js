import './App.css';
import Login from './Login/Login';
import Run from './Run';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CaseList from './caselist/CaseList';
import NgoDetail from './ngodetails/Ngodetail';
import Messages from './Messages/Messages';

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/run" element={<Run/>} />
          <Route path="/caselist" element={<CaseList/>} />
          <Route path="/ngodetails" element={<NgoDetail/>} />
          <Route path="/messages" element={<Messages/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
