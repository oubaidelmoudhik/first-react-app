import Welcome from "./Welcome";
import WelcomeCC from "./WelcomeCC";

function Hello() {
  // const name = "Oubaid";
  return (
    <>
      <h1>Hello!</h1>
      <Welcome
        name="Oubaid"
        username="oubaidelmoudhik"
        url="https://linkedin.com/in/"
      />
      <WelcomeCC age="23" />
    </>
  );
}

export default Hello;
