import axios from 'axios';
import React,{ useState,useEffect } from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoUpdate from './TodoUpdate';
import TaskList from './TaskList';

function BoardContent () {

    // const [todolist,setTodoList] = useState([]);
    
    // useEffect(() => {
    //     axios.get('http://localhost:5000/api/task/')
    //     .then(res => {
    //         setTodoList(res.data)
    //     }).catch(err => console.log(err))
    // },[])


    

    return (
        <div className="board__content">
            <div className="board__content__wraper">
                <div className="board__item">
                    <div className="board__item__wraper">
                        <div className="todo__item__title">
                            <h1 className="item__title">To Do</h1>
                            
                        </div>

                        <TaskList
                            
                            />
                           


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