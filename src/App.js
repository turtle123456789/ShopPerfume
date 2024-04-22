import './App.scss';
import Header from "./Components/HeaderComponent/Header";
import Slide from './Components/SlideComponent/Slide';
import slide1 from './assets/images/imgSlide/slide1.png';
import slide2 from './assets/images/imgSlide/slide2.png';
import slide3 from './assets/images/imgSlide/slide3.png';
import slide4 from './assets/images/imgSlide/slide4.png';
import brandDior from './assets/images/brand/dior.webp'
import brandChannel from './assets/images/brand/channel.webp'
import brandBurBerry from './assets/images/brand/burberry.webp'
import brandGucci from './assets/images/brand/gucci.webp'
import brandValorou from './assets/images/brand/valorou.webp'
import brandJS from './assets/images/brand/js.webp'
import brandOpium from './assets/images/brand/opium.webp'
import brandMP from './assets/images/brand/mp.webp'
import brandShalimar from './assets/images/brand/shalimar.webp'
const arrSlide =[{image:slide1},{image:slide2},{image:slide3},{image:slide4}]
const arrBrand =[{image:brandDior, name:"Dior"}, {image:brandChannel, name:"Channel"}, {image:brandBurBerry, name:"BurBerry"}, {image:brandGucci, name:"Gucci"}, {image:brandValorou, name:"Valorou"}, {image:brandJS, name:"JS"}, {image:brandOpium, name:"Opium"}, {image:brandMP, name:"MP"}, {image:brandShalimar, name:"Shalimar"}]
function App() {
  return (
    <div className="App-container">
      <div id='Header'>
        <div className='template1'></div>
        <div className='template2'></div>
        <Header/>
        <div style={{maxWidth:"600px", maxHeight:"820px",position:"absolute", top:"0", right:"150px"}}>
          <Slide datas={arrSlide} index={1} typeSlide={"slideBanner"}/>
        </div>
      </div>
      <h1>Thương hiệu nổi tiếng</h1>
      <Slide datas={arrBrand} index={5} typeSlide={"slideBrand"}/>
    </div>
  );
}

export default App;
