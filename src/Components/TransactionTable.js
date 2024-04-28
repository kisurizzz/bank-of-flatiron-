import Transaction from './Transaction';
import React from 'react';

function TransactionTable({transactions}){
    return(
        <table>
            <thead>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
            </tr>
            </thead>
            <tbody>
                {transactions.map((transaction)=> (
                    <Transaction key={transaction.id} transaction={transaction}/>
                ))}
            </tbody>
        </table>
    )
}

export default TransactionTable