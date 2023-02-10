import React, { useState } from "react";
import axios from "axios";

export default function PutPost() {
  const [id, getPost] = useState("-");
  const [names, setNames] = useState("-");
  const [birth, setBirth] = useState("-");
  const [weight, setWeight] = useState("-");
  const [sport, setSport] = useState("-");
  const [achievements, setAchievements] = useState("-");
  const [link, setLink] = useState("-");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3001/posts/${id}`, {
        names,
        birth,
        weight,
        sport,
        achievements,
        link,
        id,
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
              <label> Muuta </label>
              <input
                placeholder="id"
                onChange={(event) => getPost(event.target.value)}
              />

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
              Päivitä tietoja
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
