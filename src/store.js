import axios from 'axios';
import App from './App';
import TaskList from './component/TaskList';

export default function store() {

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
 



  return(
    <>
    <App user={user} />
    <TaskList user={getId} todolist={todoList}  />
    </>
  ) 



}