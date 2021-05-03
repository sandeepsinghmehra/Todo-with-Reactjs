import React from 'react';
import {Todo} from './Todo';

const Todos = (props) => {
    const style = {
        fontSize:"20px",
        color:"blue",
        margin:"2px"
        }
    const mainContainer={
        marginBottom:'50px',
    }
    return (
        <div style={mainContainer}>
            <h3 style={style}>Todos List</h3>
            {props.todos.length===0?"No Todos List Here":
            props.todos.map((todo,i)=>{
                return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
            }
            )}   
        </div>
    )
}

export default Todos;