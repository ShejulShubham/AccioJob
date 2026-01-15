import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MovieDetails({ list }) {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const m = list.find((l) => l.id === id);

    setMovie(m);
  }, [id]);

  return (
    <>
      {movie ? (
        <>
          <h2>Title: {movie.title}</h2>
          <p>Year: {movie.year}</p>
        </>
      ) : (
        <>
          <strong>Movies Not found </strong>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            Go back
          </button>
        </>
      )}
    </>
  );
}
