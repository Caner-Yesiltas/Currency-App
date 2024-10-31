import React, { useState } from 'react'
import "../styles/currency.css"
import { FaLongArrowAltRight } from "react-icons/fa";

const Currency = () => {

    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("");
    const [toCurrency, setToCurrency] = useState('');
    const [result, setResult] =useState(0);


  return (
    <div className="currency-div" >
          <div className="conversion-row">
      
      <input 
      type="number" 
      className='amount'
      value={amount} onChange={(e) => setAmount(e.target.value)}  />

      <select className='from-currency-option' 
      value={fromCurrency}
      onChange={(e)=> setFromCurrency(e.target.value)}

      >

        <option>USD</option>
        <option>EUR</option>
        <option>TL</option>

      </select>

      <FaLongArrowAltRight style ={{ fontSize:'1.25rem', marginRight:".625rem"}} />

      <select className='to-currency-option' 
      
      value={toCurrency}
      onChange={(e)=> setToCurrency(e.target.value)}
      >

        <option>USD</option>
        <option>EUR</option>
        <option>TL</option>

      </select>

      <input type="number" className='result' />
      </div>

       <div >
       <button className='convert-button'
       
      
       > Convert </button>
       </div>
       

    </div>



  )
}

export default Currency
