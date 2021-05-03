import React from 'react'

export const Todo = ({todo, onDelete}) => {
    const buttonStyle = {
        color:"white",
        backgroundColor:"red",
        borderRadius:"5px",
        margin:"5px"
    }
    const todoStyle = {
        backgroundColor:"white",
        marginBottom:"40px",
        padding:"20px",
        paddingTop:"5px",
        paddingBottom:"5px",
        borderBottom:"5px solid green",
        borderLeft:"4px solid green"
    }
    const styleH = {
        margin:"5px"
    }
    const styleP = {
        margin:"5px"
    }
    return (
        <>
        <div style={todoStyle}>
            <h4 style={styleH}>{todo.title}</h4>
            <p style={styleP}>{todo.desc}</p>
            <button style={buttonStyle} onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
        <hr />
        </>
    )
}
