import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel1 from '../../assets/images/carousel1.png'
import carousel2 from '../../assets/images/carousel2.png'
import carousel3 from '../../assets/images/carousel3.png'
import carousel4 from '../../assets/images/carousel4.png'
import carousel5 from '../../assets/images/carousel5.png'
import carousel6 from '../../assets/images/carousel6.png'
import carousel7 from '../../assets/images/carousel7.png'
import carousel8 from '../../assets/images/carousel8.png'
import carousel9 from '../../assets/images/carousel9.png'
import carousel10 from '../../assets/images/carousel10.png'
import carousel11 from '../../assets/images/carousel11.png'
import carousel12 from '../../assets/images/carousel12.png'
import carousel13 from '../../assets/images/carousel13.png'
import carousel14 from '../../assets/images/carousel14.png'
import carousel15 from '../../assets/images/carousel15.png'

const data = [
    { id: 1, name: "TDIU", img: carousel1 },
    { id: 2, name: "MIT", img: carousel2 },
    { id: 3, name: "Webster University", img: carousel3 },
    { id: 4, name: "UNESCO", img: carousel4 },
    { id: 5, name: "Qarshi xalqaro universiteti", img: carousel5 },
    { id: 6, name: "Navoiy vil barkamol avlod maktabi", img: carousel6 },
    { id: 7, name: "Kirp ilmiy tatqiqot universiteti", img: carousel7 },
    { id: 8, name: "Alanya universiteti", img: carousel8 },
    { id: 9, name: "DPES", img: carousel9 },
    { id: 10, name: "IFAR", img: carousel10 },
    { id: 11, name: "Karabuk universiteti", img: carousel11 },
    { id: 12, name: "Turin potexnika universiteti", img: carousel12 },
    { id: 13, name: "Toshkent kimyo", img: carousel13 },
    { id: 14, name: "Abertay universiteti", img: carousel14 },
    { id: 15, name: "UNDO", img: carousel15 },
  ];

function Partners() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
              breakpoint: 1024, // Planshet uchun
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768, // Telefon uchun
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 480, // Kichik ekranlar uchun
              settings: {
                slidesToShow: 1,
              },
            },
          ],
      };
      return (
        <div className="container m-auto px-4 py-8">

            <div>
                <h1 className='text-[#028910] text-3xl md:text-[40px] font-serif'>Bizning hamkorlar</h1>
                <p className='sm:text-[23px] font-serif mt-[10px]'>Universitet doimiy ravishda quyidagi tashkilotlar bilan hamkorlik qiladi.</p>
            </div>
            <br />

          <Slider {...settings}>
            {data.map((item) => (
              <div key={item.id} className="p-4">
                <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
                  <img src={item.img} alt={item.name} className="w-24 h-24 object-contain mb-4" />
                  <p className="text-lg font-semibold">{item.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      );
    };
    
    // Custom arrow components
    const NextArrow = (props) => {
      const { onClick } = props;
      return (
        <div
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full cursor-pointer"
          onClick={onClick}
        >
          ➡️
        </div>
      );
    };
    
    const PrevArrow = (props) => {
      const { onClick } = props;
      return (
        <div
          className="absolute z-10 top-1/2 left-4 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full cursor-pointer"
          onClick={onClick}
        >
          ⬅️
        </div>
      );
}

export default Partners