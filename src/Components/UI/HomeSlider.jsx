import { Navigation, Pagination,  A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const HomeSlider = () => {

    const images = [
        "../../../public/Images/Slider/img1.webp",
        "../../../public/Images/Slider/img2.jpg",
        "../../../public/Images/Slider/img3.jpg",
        "../../../public/Images/Slider/img4.jpg",

    ]

    return (
        <Swiper
            className='h-[30vh]'
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {
                images.map(image =>{
                    return  <SwiperSlide>
                        <img src={image} alt=""/>
                    </SwiperSlide>
                })
            }
        </Swiper>
    );
};

export default HomeSlider;