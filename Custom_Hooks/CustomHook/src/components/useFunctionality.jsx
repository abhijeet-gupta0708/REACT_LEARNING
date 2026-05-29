import { useState,useId,useEffect } from "react";
import InputBox from "./InputBox";
import useCurrency from "../Hooks/currencyhook";
export default function useFunctionality ()
{
    const [amount,setamount]=useState(0) // Used to change the input amout 
    const [change_amount,setchange_amount]=useState(0); // Used to change the changed or converted value of the currency
    const [from,setfrom]=useState("USD") // Default currency type
    const [to,setto]=useState("INR") // Final Currency Type 

    const currencyInfo=useCurrency(from) // Use All Currencies Rates

    const options=Object.keys(currencyInfo) // Make list of all the available conversion Currency Type


    {/* Function to Convert the Currencies */}

    const convertcurrency =[amount*useCurrency(to)]




    {/* Function for Swapping the Value and Amount */}

    const swap =()=> 
    {
        setfrom(to)
        setto(from)
        setchange_amount(amount)
        setamount(change_amount)
    }
    return {
        
            amount,
            setamount,
            change_amount,
            setchange_amount,
            from,
            setfrom,
            to,
            setto,
            convertcurrency,
            swap,
            useCurrency,
            currencyInfo,
            options,
        
    }

}