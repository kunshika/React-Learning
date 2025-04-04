import React, { useState } from "react";
function AddTodo({onNewItem}) {
  const [todoName,setTodoName]=useState("");
  const [todoDate,setTodoDate]=useState("");
  const HandleName=(event)=>{
    setTodoName(event.target.value);
  }
  const HandleDate=(event)=>{
    setTodoDate(event.target.value);
  }
  const handleAddButton=()=>{
        onNewItem(todoName,todoDate);
        setTodoName("");
        setTodoDate("");
  }
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo here" 
          value={todoName}
          onChange={HandleName}/>
        </div>
        <div className="col-4">
          <input type="date"
          value={todoDate}
          onChange={HandleDate} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-btn" onClick={handleAddButton}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;