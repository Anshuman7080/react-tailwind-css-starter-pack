import React from 'react';
import { useDispatch } from 'react-redux';
import { setName } from '../Redux/Slice/NameSlice';
import { NavLink } from 'react-router-dom'; // Correct import
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import './Home.css'; 
import './Custom_color.css'; 
import "../Components/font.css";
import { toast } from 'react-toastify';

const Home = () => {
  const dispatch = useDispatch();

  function changeHandler(event) {
    dispatch(setName(event.target.value));
    localStorage.setItem('userName', event.target.value); // Store in local storage
  }

  function toastHandler() {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      toast.success('Account Created Successfully');
    }
     
  }

  return (
    <div className="custom-font h-[450px] w-screen flex flex-col">
      <div className="custom-font flex justify-evenly pt-8 space-x-8">
        <div className='custom-font flex flex-col items-start space-y-4 pt-14'>
          <h1 className=' ml-4 custom-font font-extrabold text-6xl'>Take Control <br/> Of <span className='text-custom-color'>Your Money</span></h1>
          <p className='ml-4  custom-font text-2xl'>Personal budgeting is the secret to financial freedom. Start your journey today.</p>
          <div>
            <input type="text" placeholder="What is Your Name?"  autocomplete="off" onChange={changeHandler} className=' ml-2 border-2 w-[18rem] p-2'/>
          </div>
          <NavLink to="/Main_page" onClick={toastHandler}>
            <div className=' ml-4 bg-black text-white text-center py-2 px-4 rounded flex items-center space-x-2 w-[12rem] h-[3rem] hover-border-spacing'>
              <span className='text-xl custom-font'>Create Account</span>
              <MdOutlinePersonAddAlt1 />
            </div>
          </NavLink>
        </div>
        <div>
          <img src="https://codinginpublic.dev/projects/react-router-budget-app/assets/illustration-4f619ef1.jpg" alt="Illustration" className="w-[600px] h-[400px] pb-10"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
