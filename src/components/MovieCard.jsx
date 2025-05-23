import { Star } from "lucide-react";

export const MovieCard = ({ movie }) => {
  console.log("movie:==>", movie);

  return (
    <div>
      <div>
        <img
          className="rounded-t-lg w-[158px] h-[234px] md:w-[230px] md:h-[340px]"
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt=""
        />
      </div>
      <div className="w-[158px] h-[76px] md:w-[230px] md:h-[95px] bg-[#F4F4F5] rounded-b-lg">
        <div className="flex">
          <p className="flex gap-2 mb-[4px] font-bold">
            <Star className="text-yellow-300 fill-amber-300 mx-[8px]" />
            6.5
          </p>
          <span className="text-gray-400 m-0">/10</span>
        </div>
        <p className="mx-[8px] mt-[4px] mb-[8px] w-[142px] h-[40px] md:w-[214px] md:h-[56px]">
          {movie?.title}
        </p>
      </div>
    </div>
  );
};
