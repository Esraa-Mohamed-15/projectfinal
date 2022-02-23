import Header from './../Header/Header';
import Gallary from './../Gallary/Gallary';
import Portfollio from './../Portfollio/Portfollio';
import Buy from './../Buy/Buy';
import Footer from './../Footer/Footer';


const Index =()=>  {
  
  return (
    <div className='index'>
    <Header/>
    <Gallary/>
    <Portfollio/>
    <Buy/>
    <Footer/>
    </div>
  )

}
export default Index;
