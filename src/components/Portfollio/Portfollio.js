import React, { Component } from "react";
import './Portfollio.css';
import img1 from '../.././photos/img1.jpg';
import img2 from '../.././photos/img2.jpg';
import img3 from '../.././photos/img3.jpg';
import img4 from '../.././photos/img4.jpg';
import img5 from '../.././photos/img5.jpg';
import img6 from '../.././photos/img6.jpg';
import img7 from '../.././photos/img7.jpg';
import img8 from '../.././photos/img8.jpg';


class Portfollio extends Component{
    render(){
        return(
            
            <div className="portfollio" id="portfollio" >
            <div > 
              <img src={img1} alt=""/>
              <p className="overlay-">
              <a href="#gallary">
                Shop Now
              </a >
              </p>
            </div>
            <div> 
                <img src={img2} alt=""/>
                 <p className="overlay-">
                 <a href="#gallary">
                Shop Now
              </a >
                 </p>
            </div>
            <div> 
                <img src={img3} alt=""/>
              <p className="overlay-">
              <a href="#gallary">
                Shop Now
              </a >
              </p>
            </div>
            <div> 
                <img src={img4} alt=""/>
              <p className="overlay-">
              <a href="#gallary">
                Shop Now
              </a >
              </p>
            </div>
            <div> 
                <img src={img5} alt=""/>
              <p className="overlay-">
              <a href="#gallary">
                Shop Now
              </a >
              </p>
            </div> 
            <div> 
                <img src={img6} alt=""/>
              <p className="overlay-">
              <a href="#gallary">
                Shop Now
              </a >
              </p>
            </div> 
            <div> 
                <img src={img7} alt=""/>
              <p className="overlay-">
              <a href="#gallary">
                Shop Now
              </a >
              </p>
            </div> 
            <div> 
                <img src={img8} alt=""/>
              <p className="overlay-">
              <a href="#gallary">
                Shop Now
              </a >
              </p>
            </div> 
        </div>
    
        )
    }
}
export default Portfollio;



























//this.setState( {portfollio:res.data.portfollio})
/*class Portfollio extends Component {
   state={
       portfollio:[]
   }
   componentDidMount(){
       axios.get('inf/data.json').then( res => {this.setState( {portfollio:res.data.portfollio} )})

   }
    render(){
        const {portfollio}=this.state;
        const portfollioList = portfollio.map((portfollioItem)=>{
            return(
                 <div key={portfollioItem.id} >
                 <div className=" portfollio col-sm-3 " >  
                 <img  src={portfollioItem.image} alt="img" />
                 </div>
                </div>
              
            )
        })


        return(
            <div className="portfollio" id="portfollio">
                 {portfollioList}
            </div>
            

       )
    }
   
}
export default Portfollio;*/