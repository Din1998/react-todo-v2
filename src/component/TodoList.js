
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faRemove } from '@fortawesome/free-solid-svg-icons'


const TodoList = (props) => {
    const todolist = props.todolist.map((task,index) => {

        const removeTask = id => {
            axios.delete(`http://localhost:5000/api/task/${id}`)
            .then(res => props.removeTask(res.data))
            .catch(err => console.log())
        }

        return (
            <li key={index} >
                <p className="tasks"
                >{task.todo}</p>  
                <div>
                    <button
                    className="update__btn actbtn"
                    onClick={() => {
                    props.taskTodoUpdate(task)
                    props.showPopup()

                    }}
                    ><FontAwesomeIcon className="update__btn__icon actbtn" icon={faEdit}/></button>
                    <button
                    className="delete__btn actbtn"
                    onClick={() => {
                        removeTask(task._id)
                    }}
                    ><FontAwesomeIcon className="delete__btn__icon actbtn" icon={faRemove}/></button>
                </div>

            </li>
        )
    })

  return (
      <div className="todo__list">
         <ul>
            {todolist}
         </ul>
      </div>
  )
}

export default TodoList;