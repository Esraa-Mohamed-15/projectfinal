import React , {Component} from "react";
import { Nav } from "react-bootstrap";
import './Productshow.css';
class ProductShow extends Component{
    render(){
        return(
           < div className=" each-product-box row">
                <div className=" col-12 ">
               <img className="image col-3" src={this.props.img}/>
               <div className="sup col-lg-9">
               <h2 className="title" > {this.props.title} </h2>
               <p className="desc"> {this.props.desc} </p>
               <span className="price"> {this.props.price} </span>
               <button className="btn"> 
               <a href="/"> buy now </a>
               </button>
               </div>
            </div>
           </div>
        )
    }
}
export default ProductShow;