import React,{useState} from 'react';

import './AddTodo.css';

const AddTodo = ({addTodo,todos}) => {
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const handleSubmit=(e)=>{
         e.preventDefault();
         if(!title || !desc){
             alert('Title or Description cannot be blank.');
         }
         else{ 
            let sno;
            if(todos.length===0){
                sno=0;
            }else{
                sno = todos[todos.length-1].sno +1;
            }
         
            addTodo({sno:sno,title:title,desc:desc});
            setTitle('');
            setDesc('');
         }
    }
    
    return (
        <>
        <div className="TodoMain">
          <form onSubmit={handleSubmit}>
              <label htmlFor="title">Todo Title</label>
              <input 
                type="text"
                name="title"
                value={title}
                onChange={e=>setTitle(e.target.value)} 
                 />
              <br />
              <label htmlFor="desc">Description</label>
              <input    
                type="text" 
                name="desc"
                value={desc} 
                onChange={e=>setDesc(e.target.value)} 
                 />
              <br />
              <button type='submit'>Add</button>
           </form>
           <hr />
        </div>
        </>
    )
}

export default AddTodo;
