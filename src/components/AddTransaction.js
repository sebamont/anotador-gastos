import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export default function AddTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random()*1000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }
    return (
        <>
            <h3>Agregar un movimiento</h3>
            <form id="form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Texto</label>
                    <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Ingrese texto..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Importe <br />
                        (negativo - gasto, positivo - ingreso)
                    </label>
                    <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Ingrese importe..." />
                </div>
                <button className="btn">Agregar</button>
            </form>
        </>
    )
}
