import { useState } from "react"

function Testing()
{
    let [color,setcolor]=useState("Olive")

    return ( <> <h1>This is test caseing </h1>
    <div className="fullScreen  w-screen gap-6 pt-6 mb-6" >
        <div className=" flex flex-wrap justify-center"id="colourchange"style={{backgroundColor :color}}>

         <button onClick = {() => setcolor ("red")}className="outline-dotted outline-red-400 w-20 outline-3 relative flex flex-wrap justify-center gap-x-96 m-10 rounded-lg text-center  ">red</button>
         <button onClick = {() => setcolor ("blue")}className="outline-dotted outline-red-400 w-20  relative flex flex-wrap justify-center gap-x-96 m-10 rounded-lg text-center ">blue</button>
         <button onClick = {() => setcolor ("green")}className="outline-dotted outline-red-400 w-20  relative flex flex-wrap justify-center gap-x-96 m-10 rounded-lg text-center ">green</button>
         <button onClick = {() => setcolor ("pink")}className="outline-dotted outline-red-400 w-20  relative flex flex-wrap justify-center gap-x-96 m-10 rounded-lg text-center ">Pink</button>
         <button onClick = {() => setcolor ("yellow")}className="outline-dotted outline-red-400 w-20  relative flex flex-wrap justify-center gap-x-96 m-10 rounded-lg text-center ">Yellow</button>

        </div>
    </div>

    </>)
}
export default Testing