

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Image } from 'react-bootstrap';
import { Autoplay} from 'swiper/modules';
const Slide = ({arrSlide ,index})=>{
    return<>
    <Swiper className="mySwiper"
    style={{maxWidth:"600px", maxHeight:"820px",position:"absolute", top:"0", right:"150px"}}
    slidesPerView={index}
   
    loop={true}
    autoplay={{
      delay: 1000,
      disableOnInteraction: false,
    }}
    modules={[Autoplay]}
    >  
      {arrSlide && arrSlide.length>0 && arrSlide.map((image,index)=>{
      return(
        <SwiperSlide key={`image-${index}`}> 
          <Image src={image}></Image>
        </SwiperSlide>
      )
      })}
    </Swiper>
    </>
}
export default Slide