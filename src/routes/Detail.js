import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    console.log(json);
  };

  useEffect(() => {
    getMovie();
  }, []);
  const [movies, setMovies] = useState([])

  
  return (
      <div>
        <h1>Detail</h1>
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              CoverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            
            />
          ))}
        </div>
    </div>
  );
}

export default Detail;
