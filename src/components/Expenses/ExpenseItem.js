import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props){

    const [title, setTitle] = useState(props.title);
    const clickHandler = () => setTitle('Updated');

    return(
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}></ExpenseDate>
                <div className="expense-item-description">
                    <h2>{title}</h2>
                    <div className="expense-item-price">${props.amount}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </li>
    );
}


export default ExpenseItem;