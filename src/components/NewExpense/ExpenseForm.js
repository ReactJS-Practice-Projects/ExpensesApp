import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
    
  const [eneteredTitle, setEneteredTitle] = useState('');   
  const [eneteredAmount, setEneteredAmount] = useState('');  
  const [eneteredDate, setEneteredDate] = useState(''); 

  //when we type something in the input field we get value as an object from the input field
  //in order to get the values from this object we access it with this code: event.target.value 
  const titleChangeHandler = (event) => 
  {
    //console.log(event.target.value);
    setEneteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => 
  {
    setEneteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => 
  {
    setEneteredDate(event.target.value);
  };


  return (
    <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min="2019-01-01" onChange={dateChangeHandler}/>
            </div>
        </div>
        
        <div className='new-expense__actions'>
            <button type="submit">Add Expense</button>
        </div>

    </form>
  );
}

export default ExpenseForm;