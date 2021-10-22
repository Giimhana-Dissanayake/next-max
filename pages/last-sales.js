import React, { useEffect, useState } from "react";

function LastSalesPage() {
  const [state, setState] = useState();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setState(json);
        setIsLoading(false);
      })
      .catch(() => {});
  }, []);

  console.log("state ", state);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!state) {
    return <p>No data yet</p>;
  }

  return state.map((item) => {
    return <p>{item.name}</p>;
  });
}

export default LastSalesPage;
