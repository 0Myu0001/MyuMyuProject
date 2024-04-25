import React, { useState, useEffect } from 'react';

const Fetch = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/')
      .then((res) => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.message}</h1>
          <p>{data.time}</p>
        </div>
      ) : (
        <p>Now Loading...</p>
      )}
    </div>
  );
};

export default Fetch;
