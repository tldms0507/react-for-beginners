import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setdetail] = useState([]);
  const { id } = useParams();
  const getdetail = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setdetail(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getdetail();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="Container">
          <div>
            <div className="Poster">
              <img src={detail.medium_cover_image}></img>
            </div>
            <div>
              <h1 className="Title">{detail.title}</h1>
            </div>
            <div>{detail.year}</div>
            <div className="Rating">
              <div>★{detail.rating}</div>
            </div>
            <div className="Runtime">
              <div>Running Time: {detail.runtime}m</div>
            </div>
          </div>
          <div className="Description">{detail.description_full}</div>
        </div>
      )}
    </div>
  );
}
export default Detail;
