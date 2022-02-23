import React from "react";
import './Contact.css';
const Contact =()=>{
    return(
        <div>
        <div className="contact" id="contact-">
  <div className="container">
    <div className="contact-item" >
      <h2>  contact us  </h2>

      <form className="form-item">
                 <div className="input">
                   <input type="text" placeholder="Name"/>
                   <input type="text" placeholder="Email"/>
                 </div>
         <input className="sub" type="text" placeholder="Subject"/>
         <textarea cols="30" rows="10" placeholder="Message"></textarea>
        <input type="submit" value="shoot message"/>
      </form>
      </div>
      </div>
      </div>
      </div>
    )
}
export default Contact;