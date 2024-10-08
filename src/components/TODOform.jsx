import React, { useState,useEffect} from "react";
import TODOui from "./TODOui";
function TODOform() {

  const getLocalSorage = () =>{
    let list =localStorage.getItem('list')
    if(list){
      return JSON.parse(localStorage.getItem('list'));
    }else {
      return [];
    }
}

  const [title, settitle] = useState("");
  const [mainTask, setmainTask] = useState(getLocalSorage());
  
  useEffect(() => {
    localStorage.setItem('list',JSON.stringify(mainTask))
  }, [mainTask])
    
  function submitHandler(e)
  {
    e.preventDefault();
    if (title.length>0) {
      
    
    let newTask = { title , status:false };
    setmainTask([...mainTask, newTask])
    
    settitle("");
  }
    
      
  };
  function deleteHandler(i) {
    let cTask=[...mainTask]
    cTask.splice(i,1)
    setmainTask(cTask)
    
    
  }
  function toggleStatus(i) {
    let updatedTasks = [...mainTask];
    updatedTasks[i].status = updatedTasks[i].status === "true" ? "false" : "true";
    setmainTask(updatedTasks);
    
  }
      
    const todos_completed = mainTask.filter(
      (e) => e.status === "true"
    ).length;

  let renderTask =<p>No Task Available</p>
    if (mainTask.length>0) {
      renderTask =mainTask.map((t,i)=>{
        return <div key={i} className="flex justify-between items-center w-full p-2 ">
          <div className="flex items-center space-x-2 gap-3">
          <button onClick={() => toggleStatus(i)} className="">
              {t.status === "true" ? "✔️" : "❌"} 
            </button>
         
          
          {t.title}
          </div>
          
          <button onClick={()=>{deleteHandler(i)}} className="flex bg-red-500 text-white p-2 rounded hover:bg-red-600">
          <img width="24" height="24" src="https://img.icons8.com/material/24/FFFFFF/filled-trash.png" alt="filled-trash"/>
          </button>
          
        </div>
        
      })      
    }  
    return (
      <>
      <TODOui todos_completed={todos_completed} total_todos={mainTask.length}/>
        <form onSubmit={(e)=> submitHandler(e)} >
          <div className="flex gap-3 py-12">

          <input type="text" 
          className="bg-fuchsia-500 text-3xl text-black w-full h-16 p-5 "
          placeholder="Write Your Next Task"
          value={title}

          onChange={(e)=>{
            settitle(e.target.value)
          }}

           
          />
          <button className="cursor-pointer">
          <img width="58" height="58" src="https://img.icons8.com/color/48/plus--v1.png" alt="plus--v1"/>
          </button>
          </div>
        </form>
        <div className="text-3xl text-black font-semibold w-full h- bg-fuchsia-700" >
          <ul>
          {renderTask}
          </ul>
        </div>
      </>
    );
  }
  
  export default TODOform;
  