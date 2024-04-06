import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./movie.css";

function Movie({ id, CoverImg, title, summary, genres, rating, year }) {
  return (
    <div className="movie">
      <div className="movieList">
        <img src={CoverImg} alt={title} />
        <div className="movieInformation">
          <h2 className="movieTitle">
            <Link to={`/movie/${id}`}>{title}</Link>
            {/* a 태그를 넣는 것은 페이지 전체가 재실행, 렌더링 되기 때문에 비효율적임 */}
            {/* url에 id추가 `/movie/${id}` */}
          </h2>
          <div className="movieYear">{year}</div>
          <div className="movieRating">★{rating}</div>
          <p>
            {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
            {/* summary 길이가 너무 길 경우 235 글자만 보여줌 */}
          </p>
          <ul className="movieGenres">
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  CoverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};
export default Movie;
