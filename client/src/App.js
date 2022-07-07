import './App.css';

import { Link, Routes, Route, Navigate} from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import LandingPage from './Components/LandingPage/LandingPage';






function App() {

  const user=localStorage.getItem("token")
  return (
    <div className="App">
    
      <Routes>
      {user && <Route path="/" exact element={<LandingPage />} />}
       <Route path="/signup" exact element={<SignUp/>}/>
       <Route path="/login" exact element={<Login />} />
       <Route path="/" element={<Navigate replace to="/Flitrr" />} />
       <Route path="/Flitrr" exact element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
