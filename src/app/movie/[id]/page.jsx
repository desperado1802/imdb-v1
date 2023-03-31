import Image from "next/image";
import { SiImdb } from "react-icons/si";

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );

  return await res.json();
}

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const movie = await getMovie(movieId);
  console.log(movie);

  return (
    <div className="w-full">
      <div className="p4 pt-3 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image is not available for this content"
          style={{ maxWidth: "100%", height: "100%" }}
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold">Overview: </span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold">Release: </span>
            {movie.release_date || movie.first_air_date}
          </p>
          <div className="flex justify-between">
            <p className="mb-3">
              <span>Budget: </span>
              {movie.budget?.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
            <p className="mb-3">
              <span>Revenue: </span>
              {movie.revenue?.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
            <p className="mb-3 flex items-center">
              <span className="mr-1">Rating: </span>
              {movie.vote_average?.toFixed(1)}{" "}
              <SiImdb className="text-amber-500 text-lg ml-1" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
