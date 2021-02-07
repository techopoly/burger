import React from 'react';
import classes from './layout.module.css'
import {NavLink} from 'react-router-dom'
 
 
const Layout = (props)=>{
 
   return(
       <div>
           <ul className={classes.LayoutUl} >
               <NavLink to='/'><li className = {classes.LayoutLi}>Burger Builder</li></NavLink>
               <NavLink to='/Orders'><li className = {classes.LayoutLi}>Orders</li></NavLink>
           </ul>
           {props.children}
       </div>
   )
 
}
 
 
export default Layout;