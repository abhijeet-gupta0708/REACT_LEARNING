import { useState } from 'react'
import InputBox from './components/InputBox'
import useFunctionality from "./components/useFunctionality"
import useCurrency from './Hooks/currencyhook'

function App() {
  const {
    amount,
    setamount,
    change_amount,
    setchange_amount,
    from,
    setfrom,
    to,
    setto,
    convert,
    swap,
    useCurrency,
    options
  } =useFunctionality()

  return (
    <>
    <h1 className="bg-red-500 flex items-center text-center justify-center text-2xl">Custom Hook</h1>
    
     <InputBox
        label="From"
        amount={amount}
        currency={options}
        selectcurrency={from}
        onchangeamount={setamount}
        onchangecurrency={setfrom}
      />
    </>
  )
}

export default App
