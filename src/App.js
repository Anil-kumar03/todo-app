import React,{useState} from 'react';
import TodoList from './TodoList';

const App = () => {
  const [task,setTask] = useState("")
  const [todos,setTodo]= useState([])
  const changeHandler= e =>{
    setTask(e.target.value)
  }
const deleteHandler = (indexValue) => {
  const newtodos = todos.filter((todo,index)=> index !== indexValue);
  setTodo(newtodos);
}
  const submitHandler= e =>{
    e.preventDefault();
    const newtodos = [...todos,task]
    setTodo(newtodos)
    setTask("")
    console.log(newtodos)
    
  }
 return (
    <div>
      <center>
      <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>Todo List</h5>
        <form onSubmit={submitHandler}>
          <input type='text' name='task' onChange={changeHandler} /> &nbsp; &nbsp;
          <input type="submit" value='add' name='add'/>
        </form>
        <TodoList todolist={todos} deleteHandler={deleteHandler}/>
        
      </div>
    </div>
      </center>
    </div>
    
  )
}

export default App
