import React from 'react';
import './register.css'

export default function Register() {
    return (
        <div className='register'>
            {/* -----logo ------- */}
            <div className='logo'>
                <img src='https://cdn-0.motorcycle-logos.com/wp-content/uploads/2016/10/Harley-Davidson-logo.png' alt='logo' />
            </div>

            {/* ----------form-container------------ */}
            <div className='container'>

                {/* -----------bike-image------------ */}
               <div className='form-image'></div>

               {/* ---------------register form----------- */}
               <div className='form'>
                   <h1>Register</h1>
                   <ul>
                       <li>
                           <input type='text' placeholder='Name'/>
                       </li>
                       <li>
                           <input type='date' placeholder='dd/mm/yyy'/>
                       </li>
                       <li>
                           <input type='email' placeholder='Email'/>
                       </li>
                       <li>
                           <input type='tel' placeholder='Mobile No.'/>
                       </li>
                       <li>
                           <input type='text' placeholder='Address'/>
                       </li>
                   </ul>
                   <button>Sign Me Up</button>
                   <p>verify yourself with your mobile number</p>
               </div>
           </div>
        </div>
    );
}


