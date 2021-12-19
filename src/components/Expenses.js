//import ExpenseDate from './ExpenseDate';
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {

  return (
    <div className="expenses">
        <ExpenseItem 
            date={props.items[0].date}
            title={props.items[0].title}
            amount={props.items[0].amount}>
      </ExpenseItem>
    </div>
  );
}

export default Expenses;