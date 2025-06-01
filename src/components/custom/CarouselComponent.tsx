import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const CarouselComponent = () => {
  return (
    <div className="px-36 my-28">
      <h1 className="text-xl py-5 text-center">Gallery</h1>
      <div className="max-w-md mx-auto">
        <Carousel
          className=""
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="h-svh">
            <CarouselItem className="w-[20px] h-[20px]">
              <img
                src="https://wallpaperswide.com/download/green_nature-wallpaper-1600x1200.jpg"
                alt=""
                loading="lazy"
                className="w-full h-svh rounded-md"
              />
            </CarouselItem>
            <CarouselItem className="w-[20px] h-[20px]">
              {' '}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9VdqXP-OFKmFFUscr10_51gtyLPYvlJREtg&s"
                alt=""
                loading="lazy"
                className="w-full h-svh rounded-md"
              />
            </CarouselItem>
            <CarouselItem className="w-[20px] h-[20px]">
              {' '}
              <img
                src="https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_3840,g_auto/f_auto/q_auto/v1/shutterstock_2475547453_1_arkhzn?_a=BAVAZGE70"
                alt=""
                loading="lazy"
                className="w-full h-svh rounded-md"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;
