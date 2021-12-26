import React, {useState} from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    
  const saveExpenseDataHandler = (enteredExpenseData) => {

   const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    //console.log(expenseData);
    //here by using onAddExpense function we pass our expenseData from child NewExpense component to teh parent App component
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

   const [isEditing, setIsEditing] = useState(false);
    
   const startEditingHandler = () => {
     setIsEditing(true);
   }

   const stopEditingHandler = () => {
     setIsEditing(false);
   }

  //here we pass function saveExpenseDataHandler to ExpenseForm in order to get data from child to parent component 
  //in other words we pass pointer (function) through onSaveExpenseData prop
  return (
    <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  );
}

export default NewExpense;