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
                            <p classNAme="m-4 ">From</p>
                            <input 
                                type="number"
                                placeholder="{amount}"
                                value={amount}
                                min={0}
                                className="bg-amber-600 m-4 "
                             />
                            
                           
                    </div>

                    {/* Right Side Div */}
                    <div className="rightside m-6">
                        <p>{selectcurrency}</p>
                        <select>
                            {
                            currency.map((curr) => 
                                <option key={curr}>{curren}</option>
                            )
                        }
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
                    <div className="leftside">
                            <p classNAme="m-4 ">From</p>
                            <input 
                                type="number"
                                placeholder="{amount}"
                                value={amount}
                                min={0}
                                className="bg-amber-600 m-4"
                             />
                            
                           
                    </div>

                    {/* Right Side Div */}
                    <div className="rightside m-6">
                        <p>{selectcurrency}</p>
                        <select>
                            {
                            currency.map((curr) => 
                                <option key={curr}>{curren}</option>
                            )
                        }
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