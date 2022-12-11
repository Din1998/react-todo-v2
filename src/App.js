import './App.css';
import Navbar from './component/Navbar';
import CreateBoard from './component/CreateBoard';
import Board from './pages/Board';
import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Login from './component/LoginCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TaskList from './component/TaskList'
import store from './store';


function App() {

 const [user,setUser] = useState()
 const [todoList,setTodoList] = useState([])
  
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

  const getId = user ?user.id : [0]

  console.log(getId)

 


  useEffect(() => {
    axios.get(`http://localhost:5000/api/task/`)
    .then( res => {
        setTodoList(res.data)
    }).catch(err => console.log(err))
    
  },[])

console.log(todoList)

console.log(user)

  return (
    <div className="App">
      
      <Router>
        <Navbar user={user} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login'
            element={user ? <Navigate to="/board" /> : <Login /> }
           />
          <Route path='/login'
            element={user ? <CreateBoard /> : <Navigate to="/login" /> }
          />
        </Routes>
      </Router> 
      <TaskList user={getId} todolist={todoList} />
    </div>
  );
}

export default App;
