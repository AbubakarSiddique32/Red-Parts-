import "../Main/Main.css";
import Form from "./form";
import MainBottom from "./MainBottom";
const Main = () => {
  return (
    <>
      <div className="main">
        <div className="overlay">
          <h1>Find Parts For Your Vehicle</h1>
          <h4>Over hundreds of brands and tens of thousands of parts</h4>
          <Form />
        </div>
      </div>
      <MainBottom />
    </>
  );
};

export default Main;
