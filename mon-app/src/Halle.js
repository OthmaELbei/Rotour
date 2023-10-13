import { Link } from "react-router-dom";

export default function Hello() {
  return (
    <>
      <h1>Hallo word</h1>
      <Link to="/">
        <div style={{ backgroundColor: "orange", padding: "10px" }}>
          <h1>Go to Home Page</h1>
        </div>
      </Link>
    </>
  );
}
