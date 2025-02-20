import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Redux/Slice/ComponentSlice';
import AddExpense from '../Components/AddExpense';
import Card from '../Components/Card';
import Expenses from '../Components/Expenses';
import { BiSolidDollarCircle } from "react-icons/bi";
import "../Components/font.css";
import "./MainPage.css"; 
import "../Components/color.css";
import { useNavigate } from 'react-router-dom';


const MainPage = () => {
  const [budgetType, setBudgetType] = useState('');
  const [budgetAmount, setBudgetAmount] = useState('');
  const [showHeading, setShowHeading] = useState(false);
  const [name, setName] = useState('');
  const name2 = useSelector((state) => state.name.name);
  const budgets = useSelector((state) => state.Compo.Budgets);
  const [disc, setDisc] = useState('Personal budgeting is the secret to financial freedom.');
  const [disc2, setDisc2] = useState('Create a budget to get started!');
  const dispatch = useDispatch();
  const [expenseAdded, setExpenseAdded] = useState(false);
  const { Budgets } = useSelector((state) => state.Compo);
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (!storedName) {
      navigate('/');
    } else {
      setName(storedName);
    }
  }, [navigate]);

  useEffect(() => {
    if (name2) {
      localStorage.setItem('userName', name2);
      setName(name2); 
    }
  }, [name2]);

  
  
  

  function submitHandler(event) {
    event.preventDefault();

    dispatch(add({ budgetName: budgetType, initialAmount: budgetAmount }));
    setBudgetType('');
    setBudgetAmount('');
    setDisc('');
    setDisc2('');
    setShowHeading(true);
  }

  function isExpensesAdded() {
    setExpenseAdded(true);
  }

 
  

  return (
    <div>
      <div className='custom-font flex flex-col gap-3 ml-8 mt-10'>
        <p className='custom-font text-6xl font-extrabold '>Welcome back, <span className='text-custom-color'>{name}</span></p>
        <p className='custom-font text-2xl'>{disc}</p>
        <p className='custom-font text-2xl'>{disc2}</p>
      </div>
      <div className='custom-font flex'>
        <div className='custom-font shadow-sm shadow-slate-300 p-4 rounded-lg bg-white ml-8 text-[20px] font-bold mt-6 min-w-[600px] w-[750px]'>
          <form onSubmit={submitHandler} className='custom-font flex flex-col gap-4 pt-1 h-[300px] border-2 border-black rounded-lg border-dotted'>
            <div className='custom-font pt-4 pl-7 text-2xl font-bold'>
              <p>Create Budget</p>
            </div>
            <div className='custom-font flex flex-col pl-7'>
              <label htmlFor="budget_type">Budget Name</label>
              <input 
                type="text" 
                name="budget_type" 
                value={budgetType} 
                id="budget_type" 
                placeholder="e.g., Groceries" 
                onChange={(e) => setBudgetType(e.target.value)} 
                required 
                autocomplete="off"
                className='border-2 border-slate-300  w-full min-w-[500px] rounded-md placeholder:text-base placeholder:pl-4' 
              />
            </div>
            <div className='custom-font flex flex-col pl-7'>
              <label htmlFor="budget_amount">Amount</label>
              <input 
                type="number" 
                name="budget_amount" 
                value={budgetAmount} 
                id="budget_amount" 
                placeholder="e.g., $350" 
                onChange={(e) => setBudgetAmount(e.target.value)} 
                required 
                autocomplete="off"
                className='border-2 border-slate-300  w-full min-w-[500px] rounded-md placeholder:text-base placeholder:pl-4' 
              />
            </div>
            <div className='ml-7 relative transition-all duration-200  w-[12.6rem] h-[3.5rem]  button-hover'>
              <div className='absolute custom-font bg-black text-white  text-center items-center space-x-2 w-[12rem] h-[3rem] rounded-md'>
                <button type="submit">
                  <div className='custom-font flex justify-center py-2 items-center gap-1'>
                    <div className='custom-font'>
                      Create budget
                    </div>
                    <div className='icon-wrapper'>
                      <BiSolidDollarCircle className='icon' />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>

        {Budgets.length > 0 && (
          <div className='mt-5 custom-font'>
            <AddExpense isIndividualPage={false} isExpensesAdded={isExpensesAdded} />
          </div>
        )}
      </div>
      {showHeading && (
        <div className='text-3xl font-bold ml-8 mt-6 custom-font'>Existing Budgets</div>
      )}
      <div className='flex flex-wrap custom-font'>
        {budgets.map((budget, index) => (
          <Card key={index} budgetName={budget.budgetName} initialAmount={budget.initialAmount} isIndividualPage={false} />
        ))}
      </div>
      {expenseAdded && <Expenses isIndividualPage={false} />}
    </div>
  );
};

export default MainPage;
