import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }  

  //if we didn't have id then we could use index in teh function like this: 
  //props.items.map(expense, index), index might be the same and can cause bugs 
  return (
    <div>
      
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {props.items.map(expense => (
          <ExpenseItem  
            key={expense.id}
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date} />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;