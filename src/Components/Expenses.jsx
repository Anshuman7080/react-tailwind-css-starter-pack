import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin6Line } from "react-icons/ri";
import { delExp } from '../Redux/ExpenseSlice';
import "./font.css";
const Expenses = ({ budgetName, isIndividualPage }) => {
  const { expenses } = useSelector((state) => state.expense);

  const specificExpense = expenses.filter(expense => expense.budgetType === budgetName);

 
  const dispatch = useDispatch();
 
  function clickHandler(expense) {
    dispatch(delExp(expense));
  }

  // Added displayedExpenses to conditionally render expenses
  const displayedExpenses = isIndividualPage ? specificExpense : expenses;

  return (
    <div>
      <div className='mt-6 ml-7 text-4xl font-bold'>
        <h1>
          { displayedExpenses.length > 0 ? ( isIndividualPage ? `${budgetName} Expenses` : `Recent Expenses`):"" }
        </h1>
      </div>

      
      {displayedExpenses.length > 0 && (
        <div>
          <div className='Headings grid grid-cols-5 gap-4 mt-8 text-2xl font-bold'>
            <div className='text-center'>Name</div>
            <div className='text-center'>Amount</div>
            <div className='text-center'>Date</div>
            <div className='text-center'>Budget</div>
          </div>

          <div className='Values mt-5'>
            {displayedExpenses.map((expense, index) => (
              <div key={index} className='ExpenseRow grid grid-cols-5 gap-4 shadow-sm  bg-red-50  mb-4 p-4'>
                <div className='text-center'>{expense.name}</div>
                <div className='text-center'>{expense.amount}</div>
                <div className='text-center'>{expense.date}</div>
                <div className='text-center'>{expense.budgetType}</div>
                <div className='text-center'>
                <button onClick={() => clickHandler(expense)} className='bg-red-200 w-11 h-9 rounded-md border-2 border-red-400 flex items-center justify-center'>
                              <RiDeleteBin6Line />
                               </button>

                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Expenses;
