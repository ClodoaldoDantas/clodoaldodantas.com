import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { useSwiper } from 'swiper/react'
import styles from './SliderNavigation.module.scss'

export function SliderNavigation() {
  const swiper = useSwiper()

  return (
    <div className={styles.header}>
      <h2>Recomendações</h2>

      <div className={styles.navigation}>
        <button
          type="button"
          aria-label="Voltar para o slide anterior"
          onClick={() => swiper.slidePrev()}
        >
          <FiChevronLeft size={24} />
        </button>

        <button
          type="button"
          aria-label="Ir para o próximo slide"
          onClick={() => swiper.slideNext()}
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}
