import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { Recommendation } from './Recommendation/Recommendation'
import { recommendations } from '@/data/recommendations'
import { SliderNavigation } from './SliderNavigation/SliderNavigation'

export function Recommendations() {
  return (
    <section className="section-page">
      <Swiper loop slidesPerView={1}>
        <span slot="container-start">
          <SliderNavigation />
        </span>

        {recommendations.map((recommendation) => (
          <SwiperSlide key={recommendation.author.name}>
            <Recommendation data={recommendation} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
