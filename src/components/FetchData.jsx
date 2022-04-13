import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://hn.algolia.com/api/v1/search?query=react"
      );
      const json = await res.json();
      setData(json.hits);
    };
    fetchData();
  });

  return (
    <ul>
      {data.map((item) => (
        <li key={item.ObjectId}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default FetchData;
