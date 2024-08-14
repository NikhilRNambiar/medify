import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Carousel.css"
import Ad0 from "../../Assets/Ad0.png"
import Ad1 from "../../Assets/Ad1.png"
import Doctor1 from "../../Assets/Doctor1.png"
import Doctor2 from "../../Assets/Doctor2.png"
import Doctor3 from "../../Assets/Doctor3.png"
import Doctor4 from "../../Assets/Doctor4.png"
import Doctor5 from "../../Assets/Doctor5.png"
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay,Pagination } from 'swiper/modules';

function Carousel({type}) {
  const renderSlides = () => {
    if (type === 'offers') {
      return (
        <>
          <SwiperSlide><img src={Ad0} alt='ad0' style={{marginBottom:'30px'}}/></SwiperSlide>
          <SwiperSlide><img src={Ad1} alt='ad1'/></SwiperSlide>
          <SwiperSlide><img src={Ad0} alt='ad0'/></SwiperSlide>
          <SwiperSlide><img src={Ad1} alt='ad1'/></SwiperSlide>
          <SwiperSlide><img src={Ad0} alt='ad0'/></SwiperSlide>
          <SwiperSlide><img src={Ad1} alt='ad1'/></SwiperSlide>
        </>
      );
    } else if (type === 'doctors') {
      return (
        <>
          <SwiperSlide><div className='doctorimg'>
            <img src={Doctor1} alt='doctor1'/>
          </div>
          <div>
            <p className='name'>Dr. Ahmad Khan</p>
            <p className='title1'>Neurologist</p>
          </div>
          </SwiperSlide>

          <SwiperSlide><div className='doctorimg'>
            <img src={Doctor2} alt='doctor2'/>
            </div>
            <div>
              <p className='name'>Dr. Heena Sachdeva</p>
              <p className='title1'>Orthopadics</p>
            </div>
            
            </SwiperSlide>

          <SwiperSlide>
            <div className='doctorimg'><img src={Doctor3} alt='doctor3'/>
            </div>
            <div>
              <p className='name'>Dr. Ankur Sharma</p>
              <p className='title1'>Medicine</p>
            </div>
            </SwiperSlide>

          <SwiperSlide>
            <div className='doctorimg'><img src={Doctor4} alt='doctor4'/>
            </div>
            <div>
              <p className='name'>Dr. Ahmad Stevens</p>
              <p className='title1'>Neurologist</p>
            </div>
            </SwiperSlide>

          <SwiperSlide>
            <div className='doctorimg'><img src={Doctor5} alt='doctor5'/>
            </div>
            <div >
              <p className='name'>Dr. Lesley Hull</p>
              <p className='title1'>Medicine</p>
            </div>
            </SwiperSlide>
        </>
      );
    }
  };
  return (
    <div className={type === "offers" ? 'container-carousel' : 'doctorDiv'}> 
      <div className={type === "offers" ? 'swiper' : 'docSwiper'}>
        {type === "doctors" && (
          <div className='doctortxt'>
            <p>Our Medical Specialist</p>
          </div>
        )}
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay,Pagination]}
          className="mySwiper"
        >
          
          {renderSlides()}
        </Swiper>
      </div>
      
    </div>
  )
}

export default Carousel