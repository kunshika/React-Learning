 import React, { useState,useRef} from "react";
import { BiMessageAdd } from "react-icons/bi";
function AddTodo({onNewItem}) {
  // const [todoName,setTodoName]=useState("");
  // const [todoDate,setTodoDate]=useState("");
  const todoNameElement=useRef();
  const dueDateElement=useRef();
 
  // const HandleName=(event)=>{
  //   setTodoName(event.target.value);
  //   noOfUpdates.current+=1;

  // }
  // const HandleDate=(event)=>{
  //   setTodoDate(event.target.value);
  //   console.log(noOfUpdates.current);
  // }
  const handleAddButton=(event)=>{
    event.preventDefault();
    const todoName=todoNameElement.current.value;
    const todoDate=dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";
    // console.log(`${todoName} and ${todoDate}`)
    onNewItem(todoName,todoDate);
        // setTodoName("");
        // setTodoDate("");
  }
  return (
    <div className="container text-center">
      <form className="row kg-row"
      onSubmit={handleAddButton}>
        <div className="col-6">
          <input type="text" 
          ref={todoNameElement}
          placeholder="Enter Todo here" 
          // value={todoName}
          // onChange={HandleName}
           />
        </div>
        <div className="col-4">
          <input type="date"
          ref={dueDateElement}
          // value={todoDate}
          // onChange={HandleDate} 
          />
        </div>
        <div className="col-2">
          <button 
          type="submit"
          className="btn btn-success kg-btn">
          <BiMessageAdd/>
          </button>
        </div>
     
      </form>
    </div>
  );
}

export default AddTodo;