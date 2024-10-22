import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import styles from "./App.module.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/content/Content";
const url = "https://www.course-api.com/react-tabs-project";

function App() {
  const [jobs, setJobs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setJobs(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(function () {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.row}>
          <Sidebar jobs={jobs} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
          <Content jobs={jobs} index={currentIndex} />
        </div>
      </div>
    </main>
  );
}

export default App;
