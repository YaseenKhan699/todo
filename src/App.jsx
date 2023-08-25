import React, { useState } from "react";
import './index.css';
import ToDoList from "./TodoList";

const App=()=>{
  const[inputlist,setInputList]=useState();
  const[items,setItems]=useState([]);
  const itemsEvent=(e)=>{
    setInputList(e.target.value);
  };
  const listOfItems=()=>{
      setItems((olditems)=>{
        return[ ...olditems,inputlist]
      });
      setInputList("");
  };
  const deleteItems=(id)=>{
    setItems((olditems)=>{
      return olditems.filter((arrElem, index)=>{
        return index !==id;
      })
    })
  }
return(
  <>
    <div className="main_div">
    <div className="center_div">
    <br/>
    <h1>ToDo List</h1>
    <br/>
    <input type="text" placeholder="Add items" onChange={itemsEvent} value={inputlist}/>
    <button onClick={listOfItems}>+</button>
    <ol>
      {/* <li>{inputlist}</li> */}
     { items.map((itemsval,index)=>{
     return <ToDoList  key={index} id={index} text={itemsval} onSelect={deleteItems}/>
      })}
    </ol>

    </div>
    </div>

  </>
)

}

export default App;