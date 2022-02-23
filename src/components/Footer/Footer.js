import React from "react";
import './Footer.css';
import logo from '../.././photos/logo.png';
import cms1 from '../.././photos/cms-footer-1.png';
import cms2 from '../.././photos/cms-footer-2.png';

const Footer =()=>{
    return(
        <div>
    <footer className="footer ">

<div className="row">

<div className="title col-md-3 col-sm-6 ">
   <header><img src={logo}/></header>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex in magnam quia illum eveniet vitae vero labore impedit esse modi quo minus, itaque tempora soluta facili
   Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
   </p>
   <img className="img" src={cms1}/>
   <img className="img" src={cms2}/>   
</div>

<div className="information col-md-3 col-sm-6">
  <h2>information </h2>
  <ul>
    <li>about us</li>
    <li> generly information</li>
    <li> privacy police</li>
    <li> terms</li>
    <li> site mail </li>
  </ul>
</div>

<div className="account col-md-3 col-sm-6">
  <h2> my account</h2>
  <ul>
    <li>my account</li>
    <li> offer history</li>
    <li> whish list</li>
    <li> new shelter</li>
    <li> portofolio </li>
  </ul>
</div>

<div className="subscripe col-md-3 col-sm-6">
  <h2> follow us now </h2>


 <div className="icon">
   <i className="fa fa-facebook" aria-hidden="true"></i>
   <i className="fa fa-twitter" aria-hidden="true"></i>
   <i className="fa fa-youtube-play" aria-hidden="true"></i>
   <i className="fa fa-instagram" aria-hidden="true"></i>
 </div>

</div>
</div>
</footer>
        </div>
    )
}
export default Footer;
