import { useEffect, useState, createContext, useContext } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://www.course-api.com/react-tours-project";

export const SectionContext = createContext();
export const useAppContext = () => {
  return useContext(SectionContext);
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const FetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const dataTour = await response.json();
      console.log(dataTour);
      setTours(dataTour);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    FetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button
            style={{ marginTop: "2rem" }}
            className="btn"
            onClick={FetchData}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <SectionContext.Provider value={{ tours, setTours }}>
      <main>
        <Tours tours={tours} />
      </main>
    </SectionContext.Provider>
  );
};
export default App;
