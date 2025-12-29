'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/pagination'

export default function Bener() {
    return (
        <div className="relative w-full">

            {/* PAGINATION */}
            <div className="
        custom-pagination
        absolute -bottom-6 left-1/2 -translate-x-1/2
        flex gap-2 z-10
      " />

            <Swiper
                effect="slide"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.custom-pagination',
                    bulletClass:
                        'w-2 h-2 rounded-full bg-white/40 transition-all',
                    bulletActiveClass:
                        '!bg-cyan-400 w-5',
                }}
                modules={[Autoplay, Pagination]}
                className="w-full h-[200px] md:h-[300px] lg:h-[400px] rounded-xl overflow-hidden"
            >
                {[1, 2, 3, 4].map((i) => (
                    <SwiperSlide key={i} className="relative w-full h-full">
                        <Image
                            src={`https://swiperjs.com/demos/images/nature-${i}.jpg`}
                            alt=""
                            fill
                            className="object-cover"
                            priority={i === 1}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
