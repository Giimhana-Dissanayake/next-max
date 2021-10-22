import React, { useEffect, useState } from "react";
import useSWR from "swr";

function LastSalesPage(props) {
  const [state, setState] = useState(props.state);

  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    setState(data);
  }, [data]);

  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((json) => {
  //         setState(json);
  //         setIsLoading(false);
  //       })
  //       .catch(() => {});
  //   }, []);

  if (error) {
    return <p>Failed to load</p>;
  }

  if (!data && !state) {
    return <p>Loading...</p>;
  }

  return state ? (
    state.map((item, index) => {
      return <p key={index}>{item.name}</p>;
    })
  ) : (
    <>loading.......</>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();

  return { props: { state: data }, revalidate: 10 };
}

export default LastSalesPage;
