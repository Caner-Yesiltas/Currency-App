import React from 'react'
import "../styles/currency.css"
import { FaLongArrowAltRight } from "react-icons/fa";

const Currency = () => {
  return (
    <div className="currency-div" >
          <div className="conversion-row">
      
      <input type="number" className='amount' />
      <select className='from-currency-option' >

        <option>USD</option>
        <option>EUR</option>
        <option>TL</option>

      </select>

      <FaLongArrowAltRight style ={{ fontSize:'1.25rem', marginRight:".625rem"}} />

      <select className='to-currency-option' >

        <option>USD</option>
        <option>EUR</option>
        <option>TL</option>

      </select>

      <input type="number" className='result' />
      </div>

       <div >
       <button className='convert-button' > Convert </button>
       </div>
       

    </div>



  )
}

export default Currency
