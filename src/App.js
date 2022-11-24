import './App.css';
import Navbar from './component/Navbar';
import CreateBoard from './component/CreateBoard';
import Board from './pages/Board';
import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Login from './component/LoginCard';
import { useEffect, useState } from 'react';

function App() {

  const [user,setUser] = useState(null)
  
  useEffect(() => {
    const getUser =  () => {
      fetch('http://localhost:5000/auth/login/success', {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type" : "application/json",
          "Access-Control-Allow-Credentials": true
        }
      }).then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("Authentication has been error")
      }).then(resObject => {
        setUser(resObject.user)
      }).catch(err => {
        console.log(err)
      })
    };
    getUser();
  },[])
  

  return (
    <div className="App">
      <Router>
        <Navbar user={user} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' 
            element={user ?  <Home /> : <Navigate to="/board" /> }
            />
          <Route path='/login'
            element={user ? <Navigate to="/board" /> : <Login /> }
           />
          <Route path='/login'
            element={user ? <CreateBoard /> : <Navigate to="/login" /> }
          />
          <Route path='/board'
            element={user ? <Board /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
