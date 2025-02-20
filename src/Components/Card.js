
import "./font.css";
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SliderComponent from './Slider';
import { useNavigate } from 'react-router-dom';
import { delExp } from '../Redux/ExpenseSlice';
import {  remove } from '../Redux/Slice/ComponentSlice';
import { RiPhoneCameraFill } from "react-icons/ri";

import { RiDeleteBinLine } from "react-icons/ri";
import "./red-border.css";

const Card = ({ budgetName, initialAmount, isIndividualPage }) => {

  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];
  const [totalUsed, setTotalUsed] = useState(0);
  const [remainingAmount, setRemainingAmount] = useState(initialAmount);
  const expenses = useSelector((state) => state.expense.expenses);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  useEffect(() => {
    const totalU = expenses
      .filter((expense) => expense.budgetType === budgetName)
      .reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
    const remainingA = initialAmount - totalU;
    setTotalUsed(totalU);
    setRemainingAmount(remainingA);
  }, [expenses, budgetName, initialAmount]);

  const handleViewDetail = () => {
    navigate(`/individual_page?budgetName=${budgetName}&initialAmount=${initialAmount}&totalUsed=${totalUsed}&remainingAmount=${remainingAmount}`);
  };


  const Budgets=useSelector((state)=>state.Compo.Budgets);
  console.log(Budgets);

  const clickHandler = () => {
    dispatch(remove({ budgetName }));
    dispatch(delExp({budgetName }));
    navigate('/main_page');
  };

  return (
    <div className=' custom-font ml-8 max-w-[600px] min-w-[550px] flex flex-col mt-2 w-full md:w-[calc(70%-1rem)] lg:w-[calc(75%-1rem)] p-4'>
      <div className=" custom-font text-3xl font-bold">
      <h1>{isIndividualPage ? <><span className="text-red-500">{budgetName}</span> Overview</> : ''}</h1>

      </div>

      <div className='custom-font border-2 border-red-500 rounded-[20px] mt-6 flex flex-col gap-6'>
        <div className='custom-font flex flex-row justify-between'>
          <div className="custom-font px-4 text-xl font-bold text-red-600 pt-4">{budgetName}</div>
          <div className='custom-font px-4 text-xl font-bold text-red-600 pt-4'>${initialAmount}<span className='pl-2'>Budgeted</span></div>
        </div>

        <div className='custom-font w-[450px] min-w-[500px] mx-auto'>
          <SliderComponent value={totalUsed} max={initialAmount} />
        </div>
        <div className='custom-font flex justify-between -mt-3'>
          <div className='custom-font px-4 text-sm text-red-500'>${totalUsed}<span className='pl-1'>Spent</span></div>
          <div className='custom-font px-4 text-sm text-slate-500'>${remainingAmount}<span className='pl-1'>Remaining</span></div>
        </div>

        <div className='custom-font flex mx-auto mb-6 text-white  h-11 rounded-md'>
          {isIndividualPage ? (

            <div className=' custom  relative border-3 transition-all duration-200  w-[10.5rem] h-[3.5rem] red-border'>
              <div className='absolute custom-font bg-red-600 text-white  text-center items-center space-x-2 w-[10rem] h-[3rem] rounded-md'>
                <button type="submit"  onClick={clickHandler}>
                  <div className='custom-font flex justify-center py-2 items-center gap-2'>
                    <div className='custom-font'>
                    Delete budget
                    </div>
                    <div className='icon-wrapper'>
                    <RiDeleteBinLine className="w-5 h-8"/>
                    </div>
                  </div>
                </button>
              </div>
            </div>


          ) : (
           
 <div className=' custom  relative border-3 transition-all duration-200  w-[10.5rem] h-[3.5rem]  red-border'>
              <div className='absolute custom-font bg-red-600 text-white  text-center items-center space-x-2 w-[10rem] h-[3rem] rounded-md'>
                <button type="submit"  onClick={handleViewDetail}>
                  <div className='custom-font flex justify-center py-2 items-center gap-2'>
                    <div className='custom-font'>
                    View detail
                    </div>
                    <div className='icon-wrapper'>
                    <RiPhoneCameraFill />
                    </div>
                  </div>
                </button>
              </div>
            </div>








          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
