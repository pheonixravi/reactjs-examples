import { useEffect, useState } from "react";

const useFoodQuery = (request) => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    request.then((fetchResponse) => {
      setResponse(fetchResponse.data);
    });
  }, []);

  return { response };
};

export default useFoodQuery;
