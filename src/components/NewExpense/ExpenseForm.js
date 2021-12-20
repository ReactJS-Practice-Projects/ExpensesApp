import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
    
  /*const [eneteredTitle, setEneteredTitle] = useState('');   
  const [eneteredAmount, setEneteredAmount] = useState('');  
  const [eneteredDate, setEneteredDate] = useState(''); */

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

  //when we type something in the input field we get value as an object from the input field
  //in order to get the values from this object we access it with this code: event.target.value 
  const titleChangeHandler = (event) => 
  {
    //setEneteredTitle(event.target.value);
    
    //here we use spread operator to pass values to all properties of the object
    //then we override title with the value form the input field. 
    /*setUserInput({
        ...userInput,
        enteredTitle: event.target.value 
    })*/
    
    //Howevere, the function above depends on the previous state and that's why can break in certain conditions
    //As a result of it, the new functions was offered to set the state
    //The new function gets values from teh previous statess and assigns them with the help of spread opertator  
    //this function will gureantee that it will always be the latest snapshot value of the state. 
    //if you depend on the previous state then use this code. 
    setUserInput((prevState) => {
        return {...prevState, enteredTitle: event.target.value };
    });


};

  const amountChangeHandler = (event) => 
  {
    //setEneteredAmount(event.target.value);
    setUserInput({
        ...userInput,
        enteredAmount: event.target.value 
    })
  };

  const dateChangeHandler = (event) => 
  {
    //setEneteredDate(event.target.value);
    setUserInput({
        ...userInput,
        enteredDate: event.target.value 
    })
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