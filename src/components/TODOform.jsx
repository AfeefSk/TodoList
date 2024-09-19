import React, { useState} from "react";

function TODOform() {

  const [title, settitle] = useState("");
  const [status, setstatus] = useState("false");
  const [mainTask, setmainTask] = useState([]);
  const [complete, setcomplete] = useState([]);

  function submitHandler(e)
  {
    e.preventDefault();
    setmainTask([...mainTask, {title}])
    settitle("");
    setcomplete([...mainTask,{status} ])
    console.log (complete);
    
      
  };
  function deleteHandler(i) {
    let cTask=[...mainTask]
    cTask.splice(i,1)
    setmainTask(cTask)
    
  } 
  let renderTask =<p>No Task Available</p>
    if (mainTask.length>0) {
      renderTask =mainTask.map((t,i)=>{
        return <div key={i} className="flex justify-between items-center w-full p-2 ">
          <div className="flex items-center space-x-2 gap-3">
         <button onClick={()=>{setstatus(!status)}} className="">
          0  
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
  