import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props){

    const saveExpenseHandler = (expenseData) => {
        const newExpense = {...expenseData, id: Math.random().toString()};
        props.onAddExpense(newExpense);
    }

    return (
        <div className='new-expense'> 
            <button>New Expense</button>
            <ExpenseForm onSaveExpenseData = {saveExpenseHandler}></ExpenseForm>
        </div>
    );
}

export default NewExpense;