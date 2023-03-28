import Header from "../components/header";
import Main from "../components/main";
import Menu from "../components/menu";
import "./styles.css";

const Home = () => {
  return (
    <div className="container-home">
      <Header />
      <Menu />
      <Main />
    </div>
  );
};

export default Home;
