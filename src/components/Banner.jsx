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
        autoplay={{ delay: 3000 }} // segundos
        loop
      >
        <SwiperSlide>
          <img src="https://images.tcdn.com.br/img/img_prod/946974/69547aad99380_BANNER22.png" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://images.tcdn.com.br/img/img_prod/946974/69384f1d46e0e_BANNER_1.png" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://images.tcdn.com.br/img/img_prod/946974/69547aad8fa6f_BANNER32.png" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://images.tcdn.com.br/img/img_prod/946974/697b7565c3ccc_BANNER21.png" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://images.tcdn.com.br/img/img_prod/946974/697b756413688_BANNER31.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}