import React from 'react';
import './color.css'; 
import "./font.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { delAllExp } from '../Redux/ExpenseSlice';
import { removeAll } from '../Redux/Slice/ComponentSlice';
import { delName } from '../Redux/Slice/NameSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  function clickHandler() {
    navigate('/Main_page');
  }

  function clickHandlerDelete() {
    dispatch(delAllExp());
    dispatch(removeAll());
    dispatch(delName());
    localStorage.removeItem('userName');
    console.log("username is");
    const storedName = localStorage.getItem('userName');
    console.log(storedName);
    navigate('/');
  }

  return (
    <div className='flex justify-between items-center w-full mx-auto mt-4 px-6'>
      <button onClick={clickHandler}>
        <div className="flex items-center gap-2 p-2 no-underline font-bold hover:outline hover:outline-[3px] text-custom-color rounded-[10px] transition-all duration-0.2s">
          <div>
            <img src="https://codinginpublic.dev/projects/react-router-budget-app/assets/logomark-011cf1db.svg" alt="Logo" className="h-8" />
          </div>
          <p className="font-bold text-[25px] text-black">HomeBudget</p>
        </div>
      </button>

      {location.pathname !== '/' && (
        <button onClick={clickHandlerDelete}>
          <div className="flex items-center gap-2 p-2 no-underline font-bold outline outline-[3px] bg-red-200 rounded-[10px] outline-red-300">
            <p className="text-xl">Delete User</p>
            <div>
              <RiDeleteBinLine className='h-[30px] w-[20px]' />
            </div>
          </div>
        </button>
      )}
    </div>
  );
};

export default Navbar;
