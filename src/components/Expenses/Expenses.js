//import ExpenseDate from './ExpenseDate';
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {

  const filterChangeHandler = (selectedYear) => {
    console.log('Expenses.js');
    console.log(selectedYear);
  }  

  return (
    <div>
      
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangeHandler} />
        <ExpenseItem 
            date={props.items[0].date}
            title={props.items[0].title}
            amount={props.items[0].amount}>
        </ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;