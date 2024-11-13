import * as React from 'react'; 

const FetchContent = React.createContext();

const Fetch = ({children}) => {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:8000/api/')
      .then((res) => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <FetchContent.Provider value={data}>
      {children}
    </FetchContent.Provider>
  );
};

const useFecch = () => {
  const data = React.useContext(FetchContent);
  if (data === undefined) {
    throw new Error('useFetch must be used within a Fetch');
  }
  return data;
};

export default Fetch;
