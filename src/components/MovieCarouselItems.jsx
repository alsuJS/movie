import { ArrowRight, Play, Star } from "lucide-react";
import Link from "next/link";

export const MovieCarouselItem = ({ movie }) => {
  return (
    <div>
      <Link href={`/details/${movie.id}`}>
      <div
        className="w-full relative h-[375px] md:h-[600px]"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        }}
      >
        <div className="w-screen mx-auto h-full invisible md:visible">
          <div className="pl-[60px] pt-[200px] px-4 py-4 items-start flex-col flex w-[404px] h-[264px] top-[178px] left-[140px]">
            <div className="flex justify-center">
              <div className="w-[252px] h-[52px]">
                <p className="text-[14px] md:text-white">Now Playing:</p>
                <p className="text-[24px] font-bold md:text-white">
                  {movie.title}
                </p>
              </div>
              <div className="flex items-center">
                <Star className="text-yellow-300 fill-yellow-300 w-[28px] h-[28px]" />
                <p className="text-[18px] font-bold md:text-white">
                  {movie.vote_average.toFixed(1)}
                </p>
                <p className="text-[16px] text-bold">/10</p>
              </div>
            </div>
            <div className="py-4 md:text-white">
              <p>{movie.overview}</p>
            </div>
            <div className="flex justify-center w-[145px] h-[40px] rounded-md bg-black md:bg-white">
              <button className="text-[14px] text-white flex items-center gap-2 md:text-black">
                <Play className="w-[15px]" />
                Watch Trailer
              </button>
            </div>
          </div>
        </div>
      </div>
        </Link>
      <div className="px-4 py-4 items-start flex-col flex w-[404px] h-[264px block md:hidden">
        <div className="flex justify-center visible md:invisible">
          <div className="w-[252px] h-[52px] visible md:invisible">
            <p className="text-[14px] md:text-white">Now Playing:</p>
            <p className="text-[24px] font-bold md:text-white">Wicked</p>
          </div>
          <div className="flex items-center">
            <Star className="text-yellow-300 fill-yellow-300 w-[28px] h-[28px]" />
            <p className="text-[18px] font-bold md:text-white">6.9</p>
            <p className="text-[16px] text-gray-500">/10</p>
          </div>
        </div>
        <div className="py-4 visible md:invisible">
          <p className="text-[14px]">
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.{" "}
          </p>
        </div>
        <div className="flex justify-center w-[145px] h-[40px] rounded-md bg-black visible md:invisible">
          <button className="text-[14px] text-white flex items-center gap-2">
            <Play className="w-[15px]" />
            Watch Trailer
          </button>
        </div>
        {/* <div className="flex justify-between w-[335px] h-[36px] mt-[32px]">
          <p className="text-[24px] font-bold">Upcoming</p>
          <div className="flex items-center">
            <p className="text-[14px]">See more</p>
            <ArrowRight className="w-[12px] h-[12px] pt-[1px]" />
          </div>
        </div> */}
      </div>
    </div>
  );
};
