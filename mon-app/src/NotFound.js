import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1>404 (Not Found)</h1>
      <h3>The url you visted is not defin</h3>

      <Link to="/home">
        <button>Return Back to The Home Page</button>
      </Link>
    </>
  );
}
