
import './App.css';
import MyProfile from './component/myprofile/MyProfile';
import Home from './pages/home/Home.jsx';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Auth from './component/auth/Auth';
function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}>
        {" "}
      </div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <Router>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/login" element={<Auth />} />
        </Routes>
      </Router>
      {/* <Home /> */}
      {/* <MyProfile /> */}
    </div>
  );
}

export default App;
