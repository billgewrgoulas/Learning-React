import './ExpenseForm.css';
import { useState } from 'react';

function ExpenseForm(props){

    //Alternative way to handle local state
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    // const titleChangeHandler = (e) => 
    //     setUserInput((prevState) => ({...prevState, enteredTitle: e.event.target.value}));

    const [previousTitle, setEnteredTitle] = useState('');
    const [previousAmount, setEnteredAmount] = useState('');
    const [previousDate, setEnteredDate] = useState('');

    const titleChangeHandler = (e) => setEnteredTitle(e.target.value);
    const amountChangeHandler = (e) => setEnteredAmount(e.target.value);
    const dateChangeHandler = (e) => setEnteredDate(e.target.value);

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: previousTitle,
            amount: previousAmount,
            date: new Date(previousDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        toggleContent();
    }

    const toggleContent = (e) => props.onCancel();
    

    return (
        <form onSubmit={submitHandler}>
            <div className="new-exepense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" value={previousTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" value={previousAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={previousDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={toggleContent}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;