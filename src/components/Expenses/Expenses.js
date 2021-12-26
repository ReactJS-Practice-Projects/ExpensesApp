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

  //getFullYear is reserved word
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //now we use filteredExpenses variable ot output the list based on the matched year
  return (
    <div>
      
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {filteredExpenses.map((expense) => (
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