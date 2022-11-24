
import React, {useState} from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'

const TodoForm = (props) => {

    const [task,SetTask] = useState("")

    const addTask = () => {
        if(task.trim() === '') {
            return
        }else{
            axios.post('http://localhost:5000/api/task', {
                todo : task,
                isComplete: false
            }).then(res => {
                SetTask("")
                props.addTask(res.data)
            }).catch(err => console.log(err))
        }
    }

    return (
        <div className="todo__form__component">
            <form className="todo__form" >
                <div>
                <input 
                    className="task__input"
                    placeholder="Write Your Todo"
                    type="text"
                    value={task}
                    required
                    onChange={event => SetTask(event.target.value)}
                    />
                </div>
                <div>
                <button
                className="addtask__action__btn"
                onClick={() => addTask()}
                type="submit"
                ><FontAwesomeIcon className='addaction__btn__icon' icon={faAdd} /></button>
                </div>
                
            </form>
        </div>
    )
}

export default TodoForm;