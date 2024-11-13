import * as React from 'react'; 

// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
const FetchContent = React.createContext();

const Fetch = ({
  children
}: any) => {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:8000/api/')
      .then((res) => res.json())
      .then(data => setData(data));
  }, []);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
