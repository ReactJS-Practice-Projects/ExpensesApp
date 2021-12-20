//import ExpenseDate from './ExpenseDate';
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {

  return (
    <Card className="expenses">
        <ExpenseItem 
            date={props.items[0].date}
            title={props.items[0].title}
            amount={props.items[0].amount}>
      </ExpenseItem>
    </Card>
  );
}

export default Expenses;