import { useState } from "react";
export default function Value_changer()
{
   // let  value=0;
    const [value,setvalue]=useState(0);
    const AddValue = ()=>{
        setvalue(value+1);
        };
    const RemoveValue = ()=>{
        setvalue(value-1);
        };
    const Reset =()=>{
        setvalue(0);

    };
    return(
    
    <>
    
        <div className="fullbody justify-center align-middle items-center text-center" style={{backgroundColor:"black",color:"white"}}>
            <h2>Welcome to value Changer</h2>
            <p>Here You can add , subtract values just by clicking buttons.</p>
            <div className="functional_div">
                Current Value={value}

            </div>
            <div className="flex flex-col">

                <button onClick={AddValue} className="bg-red-700 gap-3">
                    Add Value
                </button>
                <button onClick={RemoveValue} className="bg-red-700 gap-3">
                    Remove Value
                </button>
            <button onClick={Reset} className="bg-red-700 gap-3">
                Reset Value
            </button>
            </div>


        </div>
    
    
    </>);
}
