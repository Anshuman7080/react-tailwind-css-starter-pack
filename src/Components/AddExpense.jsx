import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExp } from '../Redux/ExpenseSlice';
import { delExp } from '../Redux/ExpenseSlice';
import "./font.css";
import { AiFillPlusCircle } from "react-icons/ai";





const AddExpense = ({ budgetName, isIndividualPage, isExpensesAdded }) => {


  const [ExpenseName, setExpenseName] = useState('');
  const [ExpenseAmount, setExpenseAmount] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');

  const { Budgets } = useSelector((state) => state.Compo);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isIndividualPage) {
      setSelectedBudget(budgetName);
    } else if (Budgets.length > 0) {
      setSelectedBudget(Budgets[0].budgetName);
    }
  }, [isIndividualPage, budgetName, Budgets]);

  function submitHandler(event) {
    event.preventDefault();
   
    const currentDate = new Date().toLocaleDateString();

    dispatch(addExp({ name: ExpenseName, amount: ExpenseAmount, budgetType: selectedBudget, date: currentDate }));
  
    setExpenseName('');
    setExpenseAmount('');
    setSelectedBudget(Budgets.length > 0 ? Budgets[0].budgetName : '');
    isExpensesAdded();
  }

  return (
    <div className={` custom-font shadow-sm shadow-slate-300 p-4 rounded-lg bg-white ml-8 text-[20px] font-bold w-[600px] min-h-[250px] `}> 
      <div className={` custom-font flex flex-col gap-4 pt-1 border-2 border-black rounded-lg border-dotted ${isIndividualPage ? 'h-[250px]' : 'h-[300px]'}`}>
        <div className=' custom-font mt-[15px] pl-7 '>
          <label>
            <span>
            {isIndividualPage ? <>Add New <span className="text-red-500">{budgetName}</span> Overview</> : (Budgets.length === 1 ? <>Add <span className="text-custom-color">{Budgets[0].budgetName}</span> Expense</> : "Add New Expense")}




            </span>
            
          </label>
        </div>
        <div className='custom-font flex flex-col pl-7 h-full'>
          <form onSubmit={submitHandler} className='h-full'>
            <div className='custom-font flex gap-6'>
              <div className=' custom-font flex flex-col'>
                <label htmlFor="ExpenseName custom-font">Expense Name</label>
                <input
                  type="text"
                  id="ExpenseName"
                  name="ExpenseName"
                  value={ExpenseName}
               autocomplete="off"
                  onChange={(e) => setExpenseName(e.target.value)}
                  required 
                  className='mt-2 border-2 border-slate-300 w-[250px] rounded-md placeholder:text-base placeholder:pl-4'
                />
              </div>
              <div className='flex flex-col custom-font'>
                <label htmlFor="ExpenseAmount custom-font">Amount</label>
                <input
                  type="number"
                  id="ExpenseAmount"
                  name="ExpenseAmount"
                  value={ExpenseAmount}
    autocomplete="off"
                  onChange={(e) => setExpenseAmount(e.target.value)}
                  required 
                  className='mt-2 border-2 border-slate-300 w-[250px] rounded-md placeholder:text-base placeholder:pl-4'
                />
              </div>
            </div>
            <div className=' custom-font flex flex-col custom-font'>
              {!isIndividualPage && Budgets.length !== 0 && (
                <div className='mt-3 custom-font'>
                  <h3 className='font-bold mb-2 custom-font'>Budget Category</h3>
                  <select
                    value={selectedBudget}
                    onChange={(e) => setSelectedBudget(e.target.value)}
                    className='border-2 border-slate-300 w-[450px] rounded-md mt-1'
                  >
                    {Budgets.map((budget, index) => (
                      <option key={index} value={budget.budgetName}>
                        {budget.budgetName}
                      </option>
                    ))}
                  </select>
                </div>
              )}


             
      <div className='ml-2 mt-4 relative transition-all duration-200  w-[12.6rem] h-[3.5rem]  button-hover'>
                    <div className='absolute  custom-font bg-black text-white  text-center items-center space-x-2 w-[12rem] h-[3rem] rounded-md'>
                      <button type="submit">
                        <div className='custom-font flex justify-center py-2 items-center gap-1'>
                          <div className='custom-font'>
                          Add Expense
                          </div>
                          <div className='icon-wrapper'>
                          <AiFillPlusCircle />
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
