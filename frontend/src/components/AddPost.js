import React, { useState } from "react";
import axios from "axios";

export default function AddPost() {
  const [names, setNames] = useState("-");
  const [birth, setBirth] = useState("-");
  const [weight, setWeight] = useState("-");
  const [sport, setSport] = useState("-");
  const [achievements, setAchievements] = useState("-");
  const [link, setLink] = useState("-");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/posts", {
        names,
        birth,
        weight,
        sport,
        achievements,
        link,
      })
      .then((res) => {
        const palautus = res.data;
        console.log(palautus);
      });
  };

  return (
    <>
      <div className="child-div">
        <div className="form-box">
          <form onSubmit={handleSubmit}>
            <div className="field1">
              <label> Post </label>

              <input
                placeholder="Nimet"
                onChange={(event) => setNames(event.target.value)}
              />

              <input
                placeholder="Syntymäaika"
                onChange={(event) => setBirth(event.target.value)}
              />

              <input
                placeholder="Paino"
                onChange={(event) => setWeight(event.target.value)}
              />

              <input
                placeholder="Laji"
                onChange={(event) => setSport(event.target.value)}
              />

              <input
                placeholder="Saavutukset"
                onChange={(event) => setAchievements(event.target.value)}
              />

              <input
                placeholder="Linkki"
                onChange={(event) => setLink(event.target.value)}
              />
            </div>

            <button type="submit" id="submitBtn" className="submitBtn">
              {" "}
              Tallenna uusi urheilija
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
