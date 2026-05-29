import { useId } from "react"

export default function InputBox(
    {
        label,
        amount,
        currency=[],
        onchangecurrency,
        onchangeamount,
        selectcurrency="usd",
        amountdisable=false,
        currencydisable=false,
    }
)
{   
    const amount_input=useId()
    return(
        <>
        <div className="CompleteBox bg-blue-500 flex  rounded-lg h-screen md:w-full justify-center items-center text-black " style={{backgroundImage:`url('https://akm-img-a-in.tosshub.com/businesstoday/images/story/202602/69952e4644005-gold-was-02-per-cent-weaker-to-around-4-867-per-ounce-and-silver-was-down-by-around-the-same-margi-181259135-16x9.jpg?size=948:533')`}}> HIi 

            {/* Creating Glass Background 
            Main thing in creating is background blur which is done  through backdrop-blur */}

            <div className="glassconatiner text-black bg-white/20 backdrop-blur-3xl  w-[90%] border border-white/30 p-8 rounded-xl max-w-2xl">
                <h1 className="text-black text-center text-3xl p-1">CURRENCY EXCHANGE</h1>
                        {/* Now making Top INput Box where  */}
            
                <div className="topInputBox bg-white w-full p-2 rounded-md flex flex-wrap 
                justify-between items-center m-2">
                    
                    {/* Left Side of The Div */}
                    <div className="leftside ">
                            <div className="  ">
                             <label className=" text-3xl text-red-500" htmlFor={amount_input}>
                                {label}
                            </label>
                            </div>
                                
                            
                            <input 
                                type="number"
                                id={amount_input}
                                placeholder="Enter Amount"
                                value={amount || ""}
                                min={0}
                                disabled={amountdisable}
                                onChange={(e)=>onchangeamount && onchangeamount(Number(e.target.value))}
                                className="bg-amber-600 m-4  text-lg text-center"
                             />
                            
                           
                    </div>

                    {/* Right Side Div */}
                    <div className="rightside m-6 flex flex-col gap-2 justify-center items-center">
                        <h1 className="text-xl border-black border-2 ">Currency Type</h1>
                    <select className="border-2 rounded-3xl mr-4  "
                                    value={selectcurrency}
                                    onChange={(e)=>onchangecurrency && onchangecurrency(e.target.value)}
                                    disabled={currencydisable}
                                    >
                                        <option value={"USD"}>
                                            USD
                                        </option>
                        </select>
                    </div>

                </div>


                {/* SWAp Between The Currency Exchanger */}
                      <div className="swap  flex justify-center  items-center relative rounded-2xl">

                          <button className="text-3xl text-center w-fit p-4 bg-blue-500
                      backdrop-blur-md absolute rounded-2xl border-2 border-white hover:cursor-pointer">
                            swap
                          </button>
                      </div>

            {/* Now making Bottom INput Box where  */}
            
                <div className="topInputBox bg-white w-full p-2 rounded-md flex flex-wrap 
                justify-between items-center m-2">
 
                     {/* Left Side of The Div */}
                    <div className="leftside ">
                            <div className="  ">
                             <label className=" text-3xl text-red-500" htmlFor={amount_input}>
                                {label}
                            </label>
                            </div>
                                
                            
                            <input 
                                type="number"
                                id={amount_input}
                                placeholder="Enter Amount"
                                value={amount || ""}
                                min={0}
                                disabled={amountdisable}
                                onChange={(e)=>onchangeamount && onchangeamount(Number(e.target.value))}
                                className="bg-amber-600 m-4  text-lg text-center"
                             />
                            
                           
                    </div>

                    {/* Right Side Div */}
                    <div className="rightside m-6 flex flex-col gap-2 justify-center items-center">
                        <h1 className="text-xl border-black border-2 ">Currency Type</h1>
                       <select className="border-2 rounded-3xl mr-4  "
                                    value={selectcurrency}
                                    onChange={(e)=>onchangecurrency && onchangecurrency(e.target.value)}
                                    disabled={currencydisable}
                                    >
                                        <option value={"USD"}>
                                            USD
                                        </option>
                        </select>
                    </div>
                        
                </div>

                {/* COnversion BUtton */}

                <div className="convertButton flex justify-center m-2"><button className="text-5xl bg-blue-600 text-black hover:cursor-pointer">CONVERT</button> </div>
            
            
            </div>







        </div>
        </>
    )

}