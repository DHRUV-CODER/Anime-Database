import React, { useState } from "react";
import axios from "axios";
import Welcome from "./Welcome";
import moment from "moment";

const Search = () => {
  const [AnimeName, setAnimeName] = useState("");
  const [Resp, setResp] = useState([]);
  const GetAnimeList = () => {
    axios
      .get(
        `https://api.jikan.moe/v3/search/anime?q=${AnimeName}&order_by=title&sort=asc&limit=10`
      )
      .then((res) => {
        setResp(res.data.results);
        console.log(Resp)(Resp.map((resp) => console.log(resp)));
      });
  };
  const HandleKeyPress = (e) => {
    if (e.key === "Enter") {
      GetAnimeList();
    }
  };
  return (
    <>
      <div className="container">
        <input
          type="text"
          className="form-control my-3"
          placeholder="Search for Anime..."
          aria-describedby="basic-addon1"
          spellCheck="false"
          onChange={(e) => setAnimeName(e.target.value)}
          onKeyDown={HandleKeyPress}
        />
        {/* <button type="button" className="btn btn-light" onClick={GetAnimeList}>
          🔎
        </button> */}

        <br />
        <h5 style={{ color: "aquamarine", fontWeight: "bolder" }}>
          {AnimeName ? (
            `Results For "${AnimeName}" , Enter To Search`
          ) : Resp[0] ? null : (
            <Welcome />
          )}
        </h5>
        {Resp.map((resp) => {
          return (
            <>
              <a href={resp.url} target="_blank" rel="noreferrer">
                <img className="my-3" src={resp.image_url} alt="" />
              </a>
              <h3
                style={{ fontWeight: "bolder", color: "cornsilk" }}
              >{`${resp.title} [${resp.episodes}]`}</h3>

              <h4 style={{ color: "springgreen", fontWeight: "bolder" }}>
                {resp.score}
                {"/10"}
              </h4>
              <div className="anime_info">
                <h5 style={{ color: "yellow" }}>{resp.synopsis}</h5>
              </div>
              <span style={{ color: "cyan" }}>
                {resp.rated}
                {":"}
              </span>
              <span style={{ color: "aquamarine" }}>{resp.type}</span>
              <br />
              <small style={{ color: "aquamarine" }}>{` ${moment
                .utc(resp.start_date)
                .format("MM/DD/YYYY")} To ${moment
                .utc(resp.end_date)
                .format("MM/DD/YYYY")}`}</small>
              <hr />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Search;
