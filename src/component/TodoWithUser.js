
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil,faRemove } from '@fortawesome/free-solid-svg-icons'
import { useDrag } from "react-dnd"

const TodoWithUser = (props) => {
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
                <div className="group__btn">
                    {/* Update Button */}
                    <button
                    className="update__btn actbtn"
                    onClick={() => {
                    props.taskTodoUpdate(task)
                    props.showPopup()

                    }}
                    ><FontAwesomeIcon className="update__btn__icon actbtn" icon={faPencil}/>
                    </button>
                    {/* Delete Button */}
                    <button
                    className="delete__btn actbtn"
                    onClick={() => {
                        removeTask(task._id)
                    }}
                    ><FontAwesomeIcon className="delete__btn__icon actbtn" icon={faRemove}/>
                    </button>
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

export default TodoWithUser;