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
        <img src="https://images.tcdn.com.br/img/img_prod/946974/69384f1d46e0e_BANNER_1.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}