import styles from "../styles/Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import product1 from "../assets/Gallary/image-product-1.jpg";
import product2 from "../assets/Gallary/image-product-2.jpg";
import product3 from "../assets/Gallary/image-product-3.jpg";
import product4 from "../assets/Gallary/image-product-4.jpg";

const Slider = () => {
  const products = [product1, product2, product3, product4];

  return (
    <div className={styles.sliderBox}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item}
              alt="Your browser doesn't support this image"
              className={styles.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
