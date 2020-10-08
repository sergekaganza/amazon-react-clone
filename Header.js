import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useStateValue } from './StateProvider';


function Header() {
    const [ { basket},  ] = useStateValue ();

    console.log(basket);

    return (
    <nav className="header">
         {/* logo on the left -> img */}
         <Link to="/">
         <img 
         className="header__logo" 
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsBp2_cfu0_oxeJv2MI7me7XRLldkzyVubRA&usqp=CAU" 
         alt="" 
         />  
         </Link>
                           
             <div className="header__search">
                 <input type="text" className="header__searchInput" />
                 <SearchIcon className="header__searchIcon" />
             </div>
             <div className="header__nav">
         <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Sergio</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
         </Link> 

         <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
         </Link>

         <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
         </Link>
         
         <Link to="/checkout" className="header__link">
                 <div className="header__optionAddShoppingCart">
                    <AddShoppingCartIcon />
    <span className="header__optionLineTwo header__AddShoppingCartCount">{basket?.length}</span>
                 </div>
         </Link>          
                </div>
        

         </nav>
        
    );   
}

export default Header;
