import './App.css';
import Login from './Login/Login';
import Run from './Run';
import { BrowserRouter as Router, Routes, Route ,Navigate} from "react-router-dom";
import CaseList from './caselist/CaseList';
import NgoDetail from './ngodetails/Ngodetail';
import Messages from './Messages/Messages';

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to ="login"/>} />
          <Route path="/run" element={<Run/>} />
          <Route path="/caselist/:id" element={<CaseList/>} />
          <Route path="/ngodetails/:id" element={<NgoDetail/>} />
          <Route path="/messages" element={<Messages/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
