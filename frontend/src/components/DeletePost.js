import React, { useState } from "react";
import axios from "axios";

export default function DeletePost() {
  const [id, DeletePost] = useState("-");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:3001/posts/${id}`, {
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
              <label> Post </label>

              <input
                placeholder="urheilija id"
                onChange={(event) => DeletePost(event.target.value)}
              />
            </div>

            <button type="submit" id="submitBtn" className="submitBtn">
              {" "}
              Poista urheilija
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
