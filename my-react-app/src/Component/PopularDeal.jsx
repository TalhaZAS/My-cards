import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const PopularDeal = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  return (

    <Slider {...settings}>
        
      {data.map((item, index) => (
          
        <div key={index} >  
              <div className='max-w-sm mt-4 mr-2 border-2  hover:shadow-2xl'>
               <div className='py-5 px-5'>
               <a href={item.linkUrl}  target="_blank" rel="noreferrer">
               <img className="w-full h-35 mb-2" src={item.image} alt="hi"  />
               </a>  
              <p className=" font-bold text-black-300 text-xl ">{item.title}</p>
               <p className="mt-4 font-semibold text-black-400"><del className='mr-2'>{item.price}</del>{item.nprice}</p>
              <p className="mt-4 text-black-300 text-lg">{item.description}</p>
              <h2 className='mt-3 text-black font-semibold'> Miami</h2>
             
              </div>
            </div>
            </div>
     
       
      ))}
     
    </Slider>
  );
};

export default PopularDeal;
