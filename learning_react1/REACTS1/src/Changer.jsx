import { useState } from "react";
export default function Changer()
{
    //  let counter=0;
  let [counter,setcounter]=useState(0);
  const ADDVALUE = () => {
    setcounter(counter+1)
  }
  const REMOVEVALUE = () => {
    if(counter > 0) 
    setcounter(counter-1)
  }
  const RESET_COUNTER = () =>{
    setcounter(counter=0)
  }
  
    return(
        <>
        <button onClick={RESET_COUNTER}className ="bg-blue-400 text-white  p-11 size-10 flex justify-center items-center">Switch Mode</button>
    <div className=" Absolute inset-x-0 flex flex-col items-center justify-center align-baseline  gap-1">
        <div className="counterdiv bg-slate-500 h-10 w-40 flex justify-center items-center text-red-400 size-1000">COUNTER = {counter}</div>
    <div className="bg-red-200 h-10 w-40 flex  justify-center items-center">
    <button onClick={ADDVALUE} className="bg-slate-500 text-yellow-300">Add Value</button>
    </div>
    
    <div className="bg-red-200 h-10 w-40 flex justify-center items-center ">
    <button onClick={REMOVEVALUE}className="bg-slate-500 text-yellow-300 flex justify-center ">Remove Value</button>
    </div>
    </div>
        </>
    )
}
