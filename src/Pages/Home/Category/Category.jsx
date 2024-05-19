// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionHeader from '../../../Components/SectionHeader/SectionHeader';

const Category = () => {
  return (
    <section className='my-16'>
      <SectionHeader header={'Order Online'} subHeader={'from 11.00 am to 10.00 pm'}></SectionHeader>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h1 className='uppercase text-3xl text-center -mt-10 text-white'>Salads</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h1 className='uppercase text-3xl text-center -mt-10 text-white'>pizzas</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h1 className='uppercase text-3xl text-center -mt-10 text-white'>soups</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h1 className='uppercase text-3xl text-center -mt-10 text-white'>desserts</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h1 className='uppercase text-3xl text-center -mt-10 text-white'>Salads</h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
