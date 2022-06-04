import React from 'react';
import { useState,useEffect } from 'react';
import Link from 'next/link';
import {FcCancel} from 'react-icons/fc';
import {BsBagXFill} from 'react-icons/bs'
import { useStateContext } from '../context/StateContext';

import { runFireworks2 } from '../LIB/utilscancel';

const Canceled = () => {
    // useEffect(()=>{
    // // runFireworks2();
    // })
   
  
  
    return (
        
        
        <div className='success'>
<p className='icon'>
    
    <BsBagXFill />
</p>
<h2>Your Order got cancelled !</h2>
<p className='email-msg'>Check Your Email Inbox for the cancellation reciept</p>
<p className='description'>If you have any question, please email
<a className='email' href='mailto:contact@theheadphonestore.com'>
contact@theheadphonestore.com
</a>
</p>
<Link href='/'>
    <button type='button' width="300px" className='btn'>
Continue Shopping
    </button>
</Link>
        </div>
    
  )
}

export default Canceled