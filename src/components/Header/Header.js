import React , {Component} from "react";
import './Header.css';

const Header =()=>{
return(
    <section className="header">
        <div className="container ">
             <div className="header-info ">
                 <h2 className="header-h2"> food it while it's fresh,  
                 <span className="header-span"> get food from our shop </span>
                  </h2>
                  <p className="header-p">
                      Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.<br></br>
                       Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula.
                  </p>
                  <button className="header-button">
                      <a href="#gallary">shop now</a></button>
             </div>
        </div>
    </section>
)
}



export default Header;