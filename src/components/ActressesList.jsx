import { useState, useEffect } from "react";
// import axios from "axios";

export default function ActressesList() {
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

  return null;
}
