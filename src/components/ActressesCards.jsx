import { useState, useEffect } from "react";
// import axios from "axios";

export default function ActressesCards() {
  const [actresses, setActresses] = useState([]);

  function fetchActresses() {
    axios
      .get("https://lanciweb.github.io/demo/api/actresses/")
      .then((response) => {
        setActresses(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log("ERROR", error));
  }
  useEffect(() => {
    fetchActresses();
  }, []);

  return (
    <>
      <div className="cards-container">
        {/* MAP */}
        {actresses.map((actress) => (
          <div
            key={actress.id}
            className="single-card"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0)), url(${actress.image})`,
            }}
          >
            {/* nome */}
            <h1>{actress.name}</h1>

            {/* biografia */}
            <p>{actress.biography}</p>

            <div className="line"></div>
            <div className="info-container">
              <ul>
                <li>
                  {/* anno nascita */}
                  <span>Anno di nascita: {actress.birth_year}</span>
                </li>
                <li>
                  {/* nazionalità */}
                  <span>Nazionalità: {actress.nationality}</span>
                </li>
                <li>
                  {/* awards */}
                  <span>Riconoscimenti: {actress.awards}</span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// nome
// anno nascita
// nazionalità
// biografia
// immagine
// riconoscimenti
