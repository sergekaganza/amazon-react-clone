import React from 'react'
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import  CheckoutProduct from "./CheckoutProduct.js"

function Checkout() {
    const [{ basket }]= useStateValue();
    return (
     <div className="checkout">
       <img 
       className="checkout__ad" 
       src="https://images-eu.ssl-images-amazon.com/images/G/03/Events/2020/APDHF/PD20_PDP_LU_Hero_Countdown_6_Days_d_1500x375_DE_DE.jpg" 
       alt=""
        />
         {basket?.length === 0 ? (
             <div>
                 <h2>Your Shopping Basket is empty</h2>
                 <p>
                     You have no items in your basket.To buy one or more items,
                     click on "Add to basket" next to the item.
                 </p>
             </div>
         ) : (
             <div>
                 <h2 className="checkout__title">Your Shopping Basket</h2>
                 {/* List out all the Checkout products */}
                 {basket.map(item => (
                 <CheckoutProduct style={{width: "10%"}} className="checkout__image"
                 item={item.id} 
                 title={item.title}
                 image={item.image}
                 price={item.price}
                 rating={item.rating}
                 />
                 ))}
             </div>
                 )}
    </div>
  );
}

export default Checkout;