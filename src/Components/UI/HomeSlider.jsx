import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
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
            className='h-[50vh] w-full'
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{
                delay: 3000, // 3 seconds between slides
                disableOnInteraction: false, // keeps autoplay after user swipes
            }}
        >
            {
                images.map((image, index) => {
                    return <SwiperSlide key={index}>
                        <img className='w-full h-full object-cover' src={image} alt={`Image ${index + 1}`} />
                    </SwiperSlide>
                })
            }
        </Swiper>
    );
};

export default HomeSlider;