
import { useState } from 'react';
import Testing from './Test';
import DomRender from './newTest';
import Value_changer from'./value_changer';
import Changer from './Changer.jsx';
function App() {
 

  return (
    <>
    
    
    <h1 className="text-red-400 text-2xl">Hello With React with Brad-Man </h1>
    <div className="bg-red-200 text-black h-40 w-40 text-3xl flex justify-center "id="Testnew"> </div>
    <Changer/>
    <Testing/>
    <Value_changer />
    </>
  )
}

export default App
