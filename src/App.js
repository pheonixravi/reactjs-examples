import axios from "axios";
import "./App.css";
import ContactForm from "./components/ContactForm";
import UserProfile from "./components/customUI/UserProfile";
import Form from "./components/Form";
import FragmentsDemo from "./components/fragments/FragmentsDemo";
import Tables from "./components/fragments/Tables";
import RegisterForm from "./components/RegisterForm";
import UserForm from "./components/UserForm";
import useColor from "./customhooks/useColor";
import useFoodQuery from "./customhooks/useFoodQuery";
function App() {
  // const { response } = useFoodQuery(
  //   axios.get("https://foodish-api.herokuapp.com/api/")
  // );

  // return (
  //   <div>
  //     <img src={response.image} />
  //   </div>
  // );

  // return (
  //   <div className="App">
  //     <UserForm />
  //   </div>
  // );

  return (
    <div className="App">
      {/* <RegisterForm /> */}
      {/* <ContactForm /> */}
      {/* <Form /> */}
      {/* <UserProfile /> */}

      {/* <FragmentsDemo /> */}
      <Tables />
    </div>
  );
  // const { color, changeColor } = useColor();
  // console.log(useColor());
  // return (
  //   <div
  //     className="App"
  //     style={{ width: "100vw", height: "100vh", backgroundColor: "#" + color }}
  //   >
  //     <button onClick={changeColor}>Change Color</button>
  //   </div>
  // );
}

export default App;
