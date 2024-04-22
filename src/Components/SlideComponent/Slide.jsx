

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/navigation';
import { Image } from 'react-bootstrap';
import { Autoplay,Navigation} from 'swiper/modules';
import CartBrand from '../CartBrandComponent/CartBrand';
const Slide = ({datas ,index,typeSlide,bool})=>{

    return<>
    <Swiper className="mySwiper"
    spaceBetween={(index-1)*10}
    slidesPerView={index}
    loop={true}
    navigation={true}
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    modules={[Autoplay,Navigation]}
    >  
    
      {datas && datas.length>0 &&  datas.map((data,index)=>{
        console.log('swiperLoaded', Swiper)
        if (typeSlide === "slideBanner") {
          return (
            <SwiperSlide key={`data1-${index}`}> 
              <Image src={data.image}></Image>
            </SwiperSlide>
          );
        }else if(typeSlide === "slideBrand"){
          return (
            <SwiperSlide key={`data2-${index}`}> 
              <CartBrand datas={data}/>
            </SwiperSlide>
          );
      }
      return null;
      })}
    </Swiper>
    </>
}
export default Slide