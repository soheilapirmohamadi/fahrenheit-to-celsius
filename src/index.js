import React from 'react';
import  { render } from 'react-dom';
import App from './App';
import Func from './Func';
import Set from './Set';
 let S =()=>{
   return(
     <div>
<App favcol="yellow"/>
    <Func/>
    <Set/>
    </div>


   );
 }
 render(<S/>,document.querySelector("#root"));
