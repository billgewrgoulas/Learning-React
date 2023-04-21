import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props){

    const [isOpened, switchFlag] = useState(false);

    const saveExpenseHandler = (expenseData) => {
        const newExpense = {...expenseData, id: Math.random().toString()};
        props.onAddExpense(newExpense);
    }

    const toggle = (e) => switchFlag((flag) => !flag);

    return (
        <div className='new-expense'>  
            {!isOpened && <button onClick={toggle}>New Expense</button>}
            {isOpened && <ExpenseForm onCancel={toggle} onSaveExpenseData = {saveExpenseHandler}></ExpenseForm>}
        </div>
    );
}

export default NewExpense;