import { Star } from "lucide-react";

export const MovieDetailsHeader = ({ movie }) => {
  console.log(movie);

  return (
    <div>
      <div>
        <h1 className="">{movie.original_title}</h1>
        <div className="flex justify-between">
          <p>
            {movie.release_date}
            {"- PG - "}
            {Math.floor(movie.runtime / 60)}
            {"h "}
            {movie.runtime % 60}
            {"m"}
          </p>
          <p className="flex gap-2 mb-[4px] font-bold">
            <Star className="text-yellow-300 fill-amber-300 mx-[8px]" />
            6.5
          </p>
          <span className="text-gray-400 m-0">/10</span>
        </div>
        <img
          className="w-[375px] h-[211px] md:w-[1440px] md:h-[600px]"
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt=""
        />
      </div>
      <div className="w-[158px] h-[76px] md:w-[230px] md:h-[95px] bg-[#F4F4F5] rounded-b-lg">
        <p className="mx-[8px] mt-[4px] mb-[8px] w-[142px] h-[40px] md:w-[214px] md:h-[56px]">
          {movie?.title}
        </p>
      </div>
    </div>
  );
};
