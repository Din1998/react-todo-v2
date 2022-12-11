

function TaskList ({user,todolist}) {
 

  const todoliist = todolist ?.map((task,index) => {
    

   
    if(user === task.google){
      return console.log('match')
    }else{
      console.log('cant')
    }

    return(
      <li key={index}>
        {task.todos.map((todos,index) =>{
          return(
            <div key={index}>
              <p>{todos.todo}</p>
            </div>
          )
        })

        }
      </li>
    )


  })


  return (
    <div className="App">
      <ul>
        {todoliist}
      </ul>
    </div>
  );

}

export default TaskList;
