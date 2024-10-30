import React from 'react'

const Currency = () => {
  return (
    <div claasName="currency-div" >
      
      <input type="number" className='amount' />
      <select className='from-currency-option' >

        <option>USD</option>
        <option>EUR</option>
        <option>TL</option>

      </select>

      <select className='to-currency-option' >

        <option>USD</option>
        <option>EUR</option>
        <option>TL</option>

      </select>

      <input type="number" className='result' />

    </div>
  )
}

export default Currency
