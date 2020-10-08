import React from "react";
import Product from './Product';
import  "./Home.css";
import acer from "./myimages/acer.jpg";
import Nintendo from "./myimages/Nintendo.jpg";
import Samsung from "./myimages/Samsung.jpg";
import Webcam from "./myimages/Webcam.jpg";
import Speak501 from "./myimages/Speak501.jpg";
import Taotronics from "./myimages/TaoTronics.jpg";
import Turboclean from "./myimages/Turboclean.jpg"
import PS4 from "./myimages/PS4.jpg";
import Controller from "./myimages/Controller.jpg";
import Gamingheadset from "./myimages/Gamingheadset.jpg";
import Smartwatch from "./myimages/Smartwatch.jpg"




function Home() {
  return (
    <div className="home">
      <div className="home__container">
        
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
       
           {/* product id, title, price,ratings, image */}
        <div className="home__row">
          
         <Product
        
          id="1232134195"
          title="acer laptop"
          price="149.99"
          rating={5}
          image={ acer }
          />
          <Product

          id="125657681"
          title="Nintendo game"
          price="99.99"
          rating={5}
          image={Nintendo}
          />
          <Product
          id="1634954890609"
          title="PS4 final fantasy"
          price="165.99"
          rating={4.5}
          image={PS4}          
          />
          </div>
          <div className="home__row">
          <Product
          id="1224447898"
          title="Jabra speak Bluetooth black"
          price="165.99"
          rating={4}
          image={Speak501}
          
          />
          <Product
          id="1368589207"
          title="Smartwatch"
          price="10.99"
          rating={4}
          image={Smartwatch}
          />
          </div>
          <div className="home__row">
            <Product
          id="1224798909065"
          title="Turboclean Powerbrush"
          price="89.99"
          rating={4}
          image={Turboclean}
           />
                  
          <Product
          id="13637398907"
          title="DualShock 4 Wireless Controller for PlayStation 4"
          price="64.99"
          rating={5}
          image={ Controller }
          />
          <Product
          id="19853474421"
          title="Oculus Quest All-in-one VR Gaming Headset – 64GB"
          price="375.99"
          rating={5}
          image={ Gamingheadset }
          />
        
          </div>
          <div className="home__row">
          <Product
         id="1289878765123"
         title="Samsung"
         price="219.59"
         rating={4}
         image={ Samsung }
          />
          <Product
         id="26447216744"
         title="Webcam"
         price= "179.99"
         rating={5}
         image={ Webcam }
          />
          <Product
          id="565987686521"
          title="Taotronics"
          price="288.89"
          rating= {5}
          image={ Taotronics }
          />
          </div>
        
          </div>
      </div>
  
  );
}

export default Home;
