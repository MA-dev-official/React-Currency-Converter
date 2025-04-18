import React, { useState } from 'react';
import InputBox from './InputBox';
import useCurrencyInfo from '../hooks/useCurrencyInfo';

function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('pkr');
  const [convertedAmount, setConvertedAmount] = useState('');
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount('');
  };

  const convert = () => {
    if (!amount || isNaN(amount)) return;
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
  };

  return (
    <div className="w-[90%] bg-white/30  border-2 border-gray-400 rounded-xl p-3 backdrop-blur-[2px] flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl text-white">Currency Converter</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
        className="w-full h-full flex flex-col items-center justify-center relative gap-2"
      >
        <InputBox
          lable="From"
          amount={amount}
          onAmountChange={(e) => {
            setAmount(e.target.value)
            setConvertedAmount('')
           }}
          selectCurrency={from}
          onCurrencyChange={(e) => {
            setFrom(e.target.value)
            setConvertedAmount('')
            setAmount('')
          }}
          currencyOptions={options}
        />

        <button
          type="button"
          className="text-md text-white bg-blue-600 px-4 py-1 rounded-lg w-1/3 absolute"
          onClick={swap}
        >
          Swap
        </button>

        <InputBox
          lable="To"
          amount={convertedAmount}
          onAmountChange={() => {}}
          selectCurrency={to}
          onCurrencyChange={(e) => {
            setTo(e.target.value)
            setConvertedAmount('')
          }}
          currencyOptions={options}
          AmountDisable
        />
      </form>
      <button
        onClick={convert}
        className="text-md text-white bg-blue-600 px-4 py-1 rounded-lg w-[95%]"
      >
        Convert {from.toUpperCase()} to {to.toUpperCase()}
      </button>
    </div>
  );
}

export default CurrencyConverter;