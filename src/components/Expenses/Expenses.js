import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props){

    const [previousYear, setYear] = useState('2020');

    const dateSelectedHandler = (date) => setYear(date);
    const filteredExpenses = props.expenses.filter(e => e.date.getFullYear().toString() == previousYear);

    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={previousYear} onDateSelected={dateSelectedHandler}></ExpensesFilter>
            <ExpensesList expenses={filteredExpenses}></ExpensesList>
        </ Card>
    );
}

export default Expenses;