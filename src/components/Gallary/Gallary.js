import React ,{Component} from "react";
import GallaryData from "./Data";
import ProductShow from "./Productshow";

class Gallary extends Component{

    render(){
        const FetchData = GallaryData.map((item)=>{
            return(
               <div key={item.id}>
               <ProductShow  img={item.img} title={item.title} desc={item.desc} price={item.price}/>
               </div>
            )}
        )
        return(
         <section className="gallary" id="gallary">
            <div className="container ">
                 <div className=" gallary-item ">
                      {FetchData}
                 </div>
            </div>
         </section>
        )
    }
}
export default Gallary; 