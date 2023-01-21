import React,{useState} from 'react';
import index from './index.css';




const App = () => {
  const[value,setValue] = useState("");
  const[todo, setTodo] = useState([]);
  const[todoediting, setTodoEditing] = useState(null);
  const[editingText, setEditingText] = useState("");

  const test = (event) => {
    setValue(event.target.value);

  }
  const submit = (e) => {
e.preventDefault();

let obj = {
  id:new Date().getTime(),
  name:value
}

setTodo([...todo].concat(obj));
setValue("")


  }

  const handleDelete = (index) => {
   
   const newTodo = [...todo].filter((items) => items.id!==index)
   setTodo(newTodo);
  }
  return(
    <>
    <div className="heading">
      <h1> TODO APP</h1>
      </div>
      <form action="" className="font style">
        <div className="head">
          
          <h1> Create</h1>
          <h2>NAME</h2>
        
      <div className="text">
      <input type="text" placeholder="enter the text" onChange={test} value= {value}/>

<br/><br/>
<div className="btn">
      <button onClick={submit}>Add On</button>
      </div>
      </div>
      </div>
    </form>


            {todo.map((item,index) => {
            
            return <li key ={index} className="itemstyle">
              {todoediting ===item.id ?(<input type="text" onChange={(e)=> setEditingText(e.target.value)}/>):(<div> [item.name] </div>)}
              
              

           <button onClick={()=>handleDelete(item.id)}>Delete</button>
           <button onClick={() => setTodoEditing(item.id)}>Edit</button>
           </li>
           })};
            
  
    </>
  )
          }
export default App;