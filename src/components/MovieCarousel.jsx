import { MovieCarouselItem } from "./MovieCarouselItems";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export const MovieCarousel = ({ nowPlayingMovie }) => {
  console.log("nowPlayingMovie===>", nowPlayingMovie);

  return (
    <div>
      <Carousel className="w-screen">
        <CarouselContent>
          {nowPlayingMovie.map((movie, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <MovieCarouselItem movie={movie} id={movie.id}/>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-[150px]" />
        <CarouselNext className="absolute right-4 top-[150px]" />
      </Carousel>
    </div>
  );
};
