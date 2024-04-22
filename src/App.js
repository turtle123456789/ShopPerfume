import './App.scss';
import CartBrand from './Components/CartBrandComponent/CartBrand';
import Header from "./Components/HeaderComponent/Header";
import Slide from './Components/SlideComponent/Slide';
import slide1 from './assets/images/imgSlide/slide1.png';
import slide2 from './assets/images/imgSlide/slide2.png';
import slide3 from './assets/images/imgSlide/slide3.png';
import slide4 from './assets/images/imgSlide/slide4.png';
const arrSlide =[slide1,slide2,slide3,slide4]

function App() {
  return (
    <div className="App-container">
      <div id='Header'>
        <div className='template1'></div>
        <div className='template2'></div>
        <Header/>
        <Slide arrSlide={arrSlide} index={1}/>
      </div>
      <h1>Thương hiệu nổi tiếng</h1>
      {/* <Slide arrSlide={}/> */}
      <CartBrand/>
    </div>
  );
}

export default App;
