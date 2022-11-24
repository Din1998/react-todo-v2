import React,{useState} from "react";
import axios from "axios";


const TodoUpdate = (props) => {
  const [task,SetTask] = useState(props.task.todo)
  const updateTask = () => {
    if(task.trim() === '' || props.task.todo === task) {
      return
    } else {
      axios.put(`http://localhost:5000/api/task/${props.task._id}`,{
        _id: props.task._id,
        todo: task,
        isComlete: props.task.isComlete
      })
      .then(res => {
        props.removePopup()
        props.updateTask(res.data)
      }).catch(err => console.log(err))
    }
  }

  return (
      <div className="popup">
        <div className="popup__box">
          <input 
            className="popup__content__input"
            type="text"
            placeholder="Update todo"
            value={task}
            onChange= {event => SetTask(event.target.value)}
            />
            <button
            className="update__action__btn"
            type="submit"
            onClick={() => updateTask()}
            >Save</button>
        </div>
      </div>
  )
}

export default TodoUpdate;