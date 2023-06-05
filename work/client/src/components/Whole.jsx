import '../App.css';
import Header from './header';
import Analyses from './Analyses';
import Assurer from './Assurer';
import Contact from './Contact';
import Footer from './footer';
import Navbar from './navbar';
import Desc from './desc';
import ImageSlider from './imageslider';
import Approche from './approche';
import Separator from './bar';
import Accesp from './Accesp';
function Whole() {
  return (
    <>
        <Navbar/>
        
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "0 auto" }}>
        <Header/>
        <Separator/>
        <Desc/>
        <ImageSlider/>
        <Separator/>
        <Analyses/>
        <Separator/>
        <Approche/>
        <Separator/>     
        <Assurer/>
        <Separator/> 
         
        <Contact/> 
        <Footer/> 
        </div>
         
    </>
    
    
    
  );
}
export default Whole;