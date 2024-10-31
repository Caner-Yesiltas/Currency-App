import React, { useState } from 'react';
import '../styles/currency.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import axios from 'axios';

const Currency = () => {
  const [amount, setAmount] = useState(0);  // We set initial value to prevent React's "uncontrolled to controlled" warning
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('TRY');
  const [result, setResult] = useState(0);

  let BASE_URL = 'https://api.freecurrencyapi.com/v1/latest';
  let API_KEY = 'fca_live_XfoRHhjFt1ZalDAd2EBsj5xeYNm7BbzKQB9mTmKj';

  const exchange = async () => {
    // console.log(amount);
    // console.log(fromCurrency);
    // console.log(toCurrency);
    // console.log(result);
    try {
      const response = await axios.get(
        `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`,
      );


      if (response && response.data && response.data.data) {
        
        const result = (response.data.data[toCurrency] * amount).toFixed(2);

        setResult(result);

      } else {

        console.error("Failed to fetch data from API")
      }
      
      

    } catch (error) {
      console.error('An error occured', error);
    }

    // Dynamic property access using bracket notation
    // Using toCurrency state value as a key to get exchange rate
    // Example: data[toCurrency] works like data["USD"] or data["EUR"]
  };

  return (
    <div className='currency-div'>
      <div className='conversion-row'>
        <input
          type='number'
          className='amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          className='from-currency-option'
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>

        <FaLongArrowAltRight
          style={{ fontSize: '1.25rem', marginRight: '.625rem' }}
        />

        <select
          className='to-currency-option'
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>

        <input
          type='number'
          className='result'
          value={result}
          onChange={(e) => setResult(e.target.value)}
        />
      </div>

      <div>
        <button className='convert-button' onClick={exchange}>
          {' '}
          Convert{' '}
        </button>
      </div>
    </div>
  );
};

export default Currency;
