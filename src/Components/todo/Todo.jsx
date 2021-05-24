import React,{useState} from 'react';
import classes from "./../todo/TodoStyle.scss"
const Todo=()=>{
   
    const [todos,setTodos] = useState([]);
    const [item,insertItem] = useState();
    let addItem=(e)=>{
       if(e.target.value!==" "){
        insertItem(e.target.value);
       }
      
    }
    let insertList =(e)=>{
        setTodos(todos.concat(item));
e.target.value=""
    }
    let deleteItem=(e)=>{
        e.target.parentElement.remove();
    }
    const list =todos.length>0?todos.map(ele=><li>{ele} <button onClick={deleteItem}>Delete</button></li>):null;
    console.log(list)
    return <div className={classes.container}>
        <h3>Add Todo List</h3>
        <input type="text" name="TodoTask" id="Todo" onChange={addItem}/>
        <button onClick={insertList}>Add Item</button>
    {list}
    </div>
}

export default Todo;