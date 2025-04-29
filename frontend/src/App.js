import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLogin from './components/UserLogin';
import UserDashboard from './components/UserDashboard';
import OperatorLogin from './components/OperatorLogin';
import OperatorDashboard from './components/OperatorDashboard';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/operatorlogin" element={<OperatorLogin />} />
        <Route path="/operatordashboard" element={<OperatorDashboard />} />
      </Routes>
    </Router>
  );
}
// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

export default App;
