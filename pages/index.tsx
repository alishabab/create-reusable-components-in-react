import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Button } from "../components/Button";

const Home: NextPage = () => {
  const handleClick = () => {
    setTimeout(() => {
      alert("Clicked!");
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <Button variety="secondary" onClick={handleClick}>
        Click
      </Button>
    </div>
  );
};

export default Home;
