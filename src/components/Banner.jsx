import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-fade"

export default function Banner() {
  return (
    <div className="container" style={{ marginTop: 15 }}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3000 }}
        loop
      >
        <SwiperSlide>
          <img src="/banner.jpg" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/banner2.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}