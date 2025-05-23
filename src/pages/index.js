import { MovieCard } from "@/components/MovieCard";
import { Header } from "@/components/Header";
import { MovieCarousel } from "@/components/MovieCarousel";
import { Upcoming } from "@/components/Upcoming";
import { useEffect, useState } from "react";

export default function Home() {
  const [nowPlayingMovie, setNowPlayingMovie] = useState([]);
  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/now_playing?language=en-US&page=1`,
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

      setNowPlayingMovie(movies.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <div>
      <Header />
      <MovieCarousel nowPlayingMovie={nowPlayingMovie} />
      <Upcoming />
      <MovieCard />
    </div>
  );
}
