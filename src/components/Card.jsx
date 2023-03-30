import Image from "next/image";
import Link from "next/link";
import { SiImdb } from "react-icons/si";

export default function Card({ result }) {
  return (
    <div className="group cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image is not available for this content"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="truncate text-lg font-bold">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            <span className="flex-1">
              {result.release_date || result.first_air_date}
            </span>
            <SiImdb className="text-amber-500 text-lg mr-1" />
            {result.vote_average.toFixed(1)}
          </p>
        </div>
      </Link>
    </div>
  );
}
