import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Posts() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      try {
        axios
          .get("http://localhost:3001/posts")
          .then((res) => {
            setData(res.data.posts);
            console.log(res.data.posts);
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
    console.log(data);
  }, []);
  return (
    <div className="child-div">
      {!loading && (
        <div>
          <h2>Urheilijat</h2>
          <br></br>
          {data.map((item) => (
            <>
              <table border="1px">
                <thead>
                  <tr>
                    <th align="left">Nimi</th>

                    <th align="left">Syntymäaika</th>

                    <th align="left">Paino(KG)</th>

                    <th align="left">Laji</th>

                    <th align="left">Saavutukset</th>

                    <th align="left">Linkki kuvaan</th>

                    <th align="left">Id</th>
                  </tr>
                </thead>

                <tbody>
                  <td align="left">{item.names}</td>

                  <td align="left">{item.birth}</td>

                  <td align="left">{item.weight}</td>

                  <td align="left">{item.sport}</td>

                  <td align="left">{item.achievements}</td>

                  <td align="left">
                    <a href={item.link}> kuva</a>
                  </td>

                  <td align="left">{item.id}</td>
                </tbody>
              </table>
              <br />
            </>
          ))}
        </div>
      )}
    </div>
  );
}
