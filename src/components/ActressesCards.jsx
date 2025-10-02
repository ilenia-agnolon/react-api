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
      {/* img attrice */}
      <div
        className="single-card-container"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0)), url('./img-prova.jpg')",
        }}
      >
        <div className="text-container">
          <div className="name-and-bio-container">
            {/* nome */}
            <h1>Nome</h1>
            {/* biografia */}
            <p>
              Meryl Streep is considered one of the greatest actresses of her
              generation and has received numerous accolades for her versatile
              performances.
            </p>
            <div className="line"></div>
          </div>
          <div className="info-container">
            <ul>
              <li>
                {/* anno nascita */}
                <span>Anno di nascita: 1966</span>
              </li>
              <li>
                {/* nazionalità */}
                <span>Nazionalità: American</span>
              </li>
              <li>
                {/* awards */}
                <span>
                  Riconoscimenti: 4 Academy Awards, 8 Golden Globe Awards
                </span>
              </li>
            </ul>
          </div>
        </div>
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
