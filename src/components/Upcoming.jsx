import { ArrowRight } from "lucide-react";
import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";

export const Upcoming = () => {
  const [upComingMovie, setUpComingMovie] = useState([]);
  const UpComingMovies = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/upcoming?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );

      const movies = await response.json();
      console.log(response);

      setUpComingMovie(movies.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    UpComingMovies();
  }, []);
  return (
    <div>
      <div className="flex justify-between">
        <h1>Upcoming</h1>
        <p className="flex">
          See more <ArrowRight />
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 auto-rows-fr">
        {upComingMovie.map((movie, index) => (
          <MovieCard movie={movie} key={index}></MovieCard>
        ))}
      </div>
    </div>
  );
};
