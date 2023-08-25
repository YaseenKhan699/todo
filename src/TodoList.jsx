import React from "react";
import DoNotDisturbOnSharpIcon from '@mui/icons-material/DoNotDisturbOnSharp';

const ToDoList=(props)=>{
    return (
    <>
    <div className="todo_style">
    <DoNotDisturbOnSharpIcon  className = "fa fa-times"onClick={()=>{
        props.onSelect(props.id);
    }}/>
    <li>{props.text}</li>
    </div>
    </>
    )
}
export default ToDoList;