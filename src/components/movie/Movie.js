import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import classes from "./Movie.module.css";
function Movie() {
  const { pid } = useParams();
  console.log(pid);
  const [details, setDetails] = useState([]);
  useEffect(() => {
    axios
      .get(`https://movie-task.vercel.app/api/movie?movieId=${pid}`)
      .then((res) => {
        setDetails(res.data.data);
      })
      .catch((err) => {});
  }, [pid]);
  const imgPath = `https://image.tmdb.org/t/p/original`;

  return (
    <div
      className={classes.moviePage}
      style={{
        backgroundImage: `url(${imgPath}${details.backdrop_path})`,

        backgroundSize: "100% 100vh",
        opacity: "0.8",
      }}
    >
      <img
        style={{
          width: "200px",
          height: "200px  ",
          marginTop: "50px",
          borderRadius: "50px",
        }}
        src={`${imgPath}${details.poster_path}`}
        alt=""
      />
      <h1 style={{ color: "rgb(255,218,185)", paddingTop: "100px" }}>
        {details.original_title}
      </h1>
      <div
        style={{
          width: "70%",
          height: "300px ",
          margin: "auto",
          color: "rgb(218,165,32)",
        }}
      >
        <p style={{ color: "rgb(218,165,32)" }}>{details.overview}</p>
      </div>
    </div>
  );
}

export default Movie;
