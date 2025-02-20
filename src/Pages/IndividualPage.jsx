import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../Components/Card';

import AddExpense from '../Components/AddExpense';
import Expenses from '../Components/Expenses';
import "../Components/font.css";

const IndividualPage = () => {
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const budgetName = searchParams.get('budgetName');
  const initialAmount = searchParams.get('initialAmount');
 


  
  return (
<div className=' custom-font min-h-[450px]'>
 
 <div className='flex'>

 <div>
 <Card budgetName={budgetName}  initialAmount={initialAmount} isIndividualPage={true}/>

 </div>

<div className='mt-16'>
<AddExpense  budgetName={budgetName}  isIndividualPage={true}/>

</div>


 </div>

<Expenses  budgetName={budgetName}  isIndividualPage={true} />


</div>
    
  );
};

export default IndividualPage;
