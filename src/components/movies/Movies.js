import React from "react";
import { Link } from "react-router-dom";

function Movies(props) {
  return (
    <div>
      <div className="row ">
        {props.data.map((movie) => (
          <div className="col-md-4 justify-content-center d-flex  ">
            <div className="card mt-4" style={{ width: "18rem" }}>
              <img src="" className="card-img-top" alt="" />
              <div className="card-body">
                <img
                  style={{ width: "246px", height: "218px" }}
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt=""
                />
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{movie.original_title}</li>

                <li className="list-group-item">{`People watched ${movie.popularity}`}</li>
              </ul>
              <div className="card-body">
                <Link to={`/Movie/${movie.id}`}>Learn more about</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
