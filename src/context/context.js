import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":75,"category":"House","type":"Expense","date":"2020-12-29","id":"6841e4c3-705a-4a9e-8d4e-958798f78b1a"},{"amount":55,"category":"Travel","type":"Expense","date":"2020-12-22","id":"9aa74f62-5243-4035-a256-d87a6ef79024"},{"amount":50,"category":"Business","type":"Income","date":"2020-12-29","id":"67c5678b-3c38-4abb-9bcc-21465fe61f22"},{"amount":100,"category":"Salary","type":"Income","date":"2020-12-28","id":"5261700b-3379-4f4f-ba6a-49195dd94506"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
	const [transactions, dispatch] = useReducer(contextReducer, initialState);

	const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id });
	const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction });

	const balance = transactions.reduce((acc, currVal) => currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount, 0);

	return (
		<ExpenseTrackerContext.Provider value={{
			deleteTransaction,
			addTransaction,
			transactions,
			balance
		 }}>
			{children}
		</ExpenseTrackerContext.Provider>
	);
}
