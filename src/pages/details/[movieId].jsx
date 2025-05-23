import { MovieDetailsHeader } from "@/components/MovieDetailsHeader";
import { getMovieById } from "@/utils";
import { Star } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();

  const movieId = router.query.movieId;
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const data = await getMovieById(movieId);
    setMovie(data);
  };

  useEffect(() => {
    if (!movieId) return;
    getMovie();
  }, [movieId]);

  return (
    <div>
      <MovieDetailsHeader movie={movie} />
    </div>
  );
}
