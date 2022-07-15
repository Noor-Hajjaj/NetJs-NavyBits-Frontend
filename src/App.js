import './App.css';
import Login from './Login/Login';
import Users from './Users/Users';
import { BrowserRouter as Router, Routes, Route ,Navigate} from "react-router-dom";
import Signup from './signup/signup';


function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to ="login"/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
