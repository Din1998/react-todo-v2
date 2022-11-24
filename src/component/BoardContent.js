import axios from 'axios';
import React,{ useState,useEffect } from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoUpdate from './TodoUpdate';


function BoardContent () {

    const [todolist,setTodoList] = useState([]);
    const [todoUpdate,setTodoUpdate] = useState({});
    const [showPopup,setShowPopup] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:5000/api/task')
        .then(res => {
            setTodoList(res.data)
        }).catch(err => console.log(err))
    },[])

    const addTask = newTask => {
        setTodoList([...todolist,newTask])
    }

    const TaskComplete = task => {
        const newList = [...todolist]
        newList.forEach( item => {
            if(item._id === task._id) {
                item.isComplete = task.isComplete
            }
        })
        setTodoList(newList)
    }

    const removeTask = task => {
        const newList = todolist.filter(item => !(item._id === task._id))
        setTodoList(newList)
    }

    const updateTask = task => {
        const newList = [...todolist]
        newList.forEach(item => {
            if(item._id === task._id){
                item.todo = task.todo
            }
        })

        setTodoList(newList)
    }

    return (
        <div className="board__content">
            <div className="board__content__wraper">
                <div className="board__item">
                    <div className="board__item__wraper">
                        <div className="todo__item__title">
                            <h1 className="item__title">To Do</h1>
                       
                        </div>
                            <TodoForm 
                               addTask = {addTask}
                            />
                            <TodoList 
                                todolist={todolist}
                                updateTodoList = {TaskComplete}
                                removeTask = {removeTask}
                                taskTodoUpdate = {task => setTodoUpdate(task)}
                                showPopup = {() => setShowPopup(!showPopup)}
                            />
                            {showPopup && <TodoUpdate
                            task = {todoUpdate}
                            updateTask = {updateTask}
                            removePopup = {() => setShowPopup(!showPopup)}

                            />}
                            

                    </div>
                </div>

                <div className="board__item">
                    <h1 className="item__title">Doing</h1>
                   
                </div>
                <div className="board__item">
                    <h1 className="item__title">Done</h1>
                   
                </div>
            </div>
            
            
        </div>
    )
}

export default BoardContent;