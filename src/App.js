import React, { useEffect, useState } from "react";
import Apod from "./Apod";
import ApiObj from "./FetchedApi";

import "./App.css";

function App() {
  const [apodData, setApodData] = useState([]);

  useEffect(() => {
    let counter = prompt("How many media would you like to see ? ");
    async function fetchData() {
      const fetchData = await ApiObj.fetchData(counter);
      //console.log("err : " + fetchData.msg);
      setApodData(fetchData);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      {apodData.length > 1 ? (
        apodData.map((item, index) => <Apod key={index} apodData={item} />)
      ) : (
        <p>{apodData.msg}</p>
      )}
    </div>
  );
}

export default App;
