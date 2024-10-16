import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

// Import required modules for Swiper
SwiperCore.use([Autoplay]);

const Bank = () => {
  const items = [
    { src: '/img/visa.png', alt: 'Visa' },
    { src: '/img/amrexp.png', alt: 'American Express' },
    { src: '/img/master.png', alt: 'MasterCard' },
    { src: '/img/one-caed.png', alt: 'One Card' },
    { src: '/img/Dinesr-club.png', alt: 'Diners Club' },
    { src: '/img/RuPay.png', alt: 'RuPay' },
  ];

  return (
    <section className="py-3 bg-light mysection">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Swiper
              spaceBetween={10}
              slidesPerView={5}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 2 },
                600: { slidesPerView: 3 },
                1000: { slidesPerView: 5 },
              }}
            >
              {items.map((item, index) => (
                <SwiperSlide key={index}>
                  <Link href={item.src} data-fancybox={`gallery-${index}`} data-expand="-1">
                    <Image src={item.src} alt={item.alt} className="" width={140} height={56} />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bank;
