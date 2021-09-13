import React, { useEffect, useState } from "react";

function TestApp(props) {
  const [userArr, setUserArr] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((result) => result.json())
      .then((res) => {
        console.log("res", res);
        setUserArr(res);
      });
  }, []);

  return (
    <>
      <div>Test</div>

      {userArr && userArr.length > 0 ? (
        userArr.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.population}</td>
            </tr>
          );
        })
      ) : (
        <h>no data</h>
      )}
    </>
  );
}

export default TestApp;
