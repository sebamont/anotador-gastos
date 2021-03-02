import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export default function IncomeExpenses() {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const incomeTotal = amounts.filter(item => item >0).reduce((acc,item) => (acc += item), 0).toFixed(2);
    const expenseTotal = amounts.filter(item => item <0).reduce((acc,item) => (acc += item), 0).toFixed(2);
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Ingresos</h4>
                <p id="money-plus" className="money plus">+{incomeTotal}</p>
            </div>
            <div>
                <h4>Gastos</h4>
                <p id="money-minus" className="money minus">{expenseTotal}</p>
            </div>
        </div>
    )
}
