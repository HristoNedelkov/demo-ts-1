import "./App.css";
import People from "./components/People";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  //   type Things = Person | Vehicle;

  //   type Vehicle = {
  //     type:'Vehicle',
  //     model: string;
  //     wheels: number;
  //   };
  //   type Person = {
  //     type:'Person',
  //     name: string;
  //     id: number;
  //   };
  // let gosho: Things = {
  //   type:'Person',
  //   name:'Gosho',
  // }
  //   switch (Things.type) {
  //     case "Person":
  //       console.log(Things.Person.name);
  //       break;
  //     case "Vehicle":
  //       console.log(Vehicle.wheels);
  //       break;
  //     default:
  //       console.log("No match found");
  //   }
  return (
    <>
      <h1>People</h1>
      <People />
    </>
  );
}

export default App;
