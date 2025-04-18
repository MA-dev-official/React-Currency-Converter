import React from 'react'

function InputBox({
  lable,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [], 
  amountDisable = false,
  selectCurrency, 
}) {
  return (
    <div className="bg-white w-full h-1/2 p-2 rounded-lg ">
      <div className="w-full flex items-center justify-between text-sm mb-1 "> 
        <lable htmlFor="amountBox" >{lable}</lable> 
        <p>Currency type </p> 
      </div>
      <div className="w-full flex items-center justify-between">
     <input type="number" value = {amount} onChange={ onAmountChange && onAmountChange } disabled={amountDisable} id="amountBox" className="w-1/2 h-1/2 outline-none bg-transparent text-2xl border-b-1 border-black " placeholder =" 0 "/>
     <select className="outline outline-gray-400 p-1 rounded-sm mr-2" value={selectCurrency} onChange={onCurrencyChange} >
       {currencyOptions.map((currency)=>(
        <option key={currency} value={currency}>{currency}</option>
       )) }
     </select>
      </div>
    </div>
  )
}

export default InputBox