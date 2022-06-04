import React from 'react';
import Link from 'next/link';
import {AiOutlineShopping} from 'react-icons/ai';

import {Cart} from './'
import { useStateContext } from '../context/StateContext';
import { Auth } from 'aws-amplify';
import {MdOutlineLogout} from 'react-icons/md'


const Navbar = () => {

  const signout = () => {
    Auth.signOut();
  }

  
 
    
    



  const {showCart,setShowCart,totalQuantities} = useStateContext();

  return (
    
    <div className='navbar-container'>
     <p className='logo' >
       <Link href="/" >The Wearables🎧</Link>
       
     </p>

    
  
     
    
     
   
     <button className='signout-container' 
     onClick={signout} type='button'> 
     <MdOutlineLogout /></button>
     
     
       <button className='cart-icon'
       type='button' onClick={() => setShowCart(true)}
       >

         <AiOutlineShopping />
         <span className='cart-item-qty'>{totalQuantities}</span>
       </button>

       {showCart && <Cart />}
          
    </div>
  )
}

export default Navbar