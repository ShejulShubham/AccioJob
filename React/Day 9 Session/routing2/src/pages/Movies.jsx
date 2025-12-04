import { Link } from "react-router-dom";

export default function Movies({movies}) {


  return (
    <>
      <ul>
        {movies.map((m) => (
          <li key={m.id}>
            <Link to={`/movie/${m.id}`}>{m.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
