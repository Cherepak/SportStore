import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default class Slider extends React.Component {
    render() {
        return (
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                pagination={{ clickable: true }}
                slidesPerView={1}
                >
                <SwiperSlide>
                    <button className="">
                        1
                    </button>
                </SwiperSlide>

                <SwiperSlide>
                    <button className="">
                        2    
                    </button>
                </SwiperSlide>

                <SwiperSlide>
                    <button className="">
                        3    
                    </button>
                </SwiperSlide>
            </Swiper>
        )
    }
}
