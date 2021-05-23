import React, { useState } from "react";

export const CreateTodo = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const submit = (data) => {
        data.preventDefault();
        if(!title || !description){
            alert("Title or Desciption can't be empty");
        } else {
            props.addTodo(title, description);
            setTitle("");
            setDescription("");
        }
    }
  return (
    <div className="container my-3">
      <h3>Create Todo</h3> 
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" value={title} onChange={(data)=>setTitle(data.target.value)} className="form-control" id="title"/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" value={description} onChange={(data)=>setDescription(data.target.value)} className="form-control" id="description"/>
        </div>
        <button type="submit" className="btn btn-sm btn-success">Create Todo</button>
      </form>
    </div>
  );
};
