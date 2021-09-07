import React from 'react';
import  { render } from 'react-dom';

import Func from './Func';
import Set from './Set';
 let S =()=>{
   return(
     <div>
       <Func/>
    <Set/>
    </div>


   );
 }
 render(<S/>,document.querySelector("#root"));
