import { ArrowForward } from "@mui/icons-material";
import React,{useEffect} from "react";




const Portfolio = () => {
  useEffect(() => {
    // Load GLightbox only on the client side
    if (typeof window !== 'undefined') {
      import('glightbox').then((GLightbox) => {
        const lightboxInstance = GLightbox.default({
          selector: '.glightbox',
        });
      });
    }
  }, []);

  return (
    <section className="pt-10 pb-12   bg-black">
      <div className="bg-[url('https://j.gifs.com/KeX0g7.gif')] bg-cover bg-center">


        <div className="flex flex-wrap  z-50">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="block mb-2 text-lg font-semibold ">
                Portfolio
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                You dream it, We film it              </h2>
              <p className="text-base text-body-color text-gray-300">
              Step into a world where dreams take center stage and stories unfold with cinematic finesse.

              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap ">
          <ServiceCard
            
          />
          <ServiceCard
           
          />
          <ServiceCard
            
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-gray-300 m-1 p-2 md:m-3 md:p-2 rounded-lg text-center text-sm md:text-lg">
            view more
            <ArrowForward />
          </button>
        </div>
    
      </div>
    </section>
  );
};

export default Portfolio;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="mx-auto w-full p-4 md:w-1/2 lg:w-1/3 rounded-md ">
      
             <a href="https://www.youtube.com/watch?v=bviZnwdKCfk&ab_channel=TheFilmHouseOfficial" class="glightbox">
          <img src="https://biati-digital.github.io/glightbox/demo/img/small/gm10.jpg" 
          alt="https://biati-digital.github.io/glightbox/demo/img/small/gm10.jpg" 
          className="w-full rounded-lg  
              
          transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"

          
        
        />

        </a>
      </div>
    </>
  );
};
