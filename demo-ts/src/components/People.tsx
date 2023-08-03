import { useState } from "react";
import { LoadStateType, usePeople } from "../hooks/usePeople";
import Person from "./Person";
import Spinner from "./Spinner";
import ApexChart from "./ApexChart";

const People = () => {
  const [isLoading, setIsLoading] = useState<LoadStateType>(false);

  const changeIsLoading = (state: LoadStateType) => {
    setIsLoading(state);
  };
  const people = usePeople(changeIsLoading);

  const mySeries = [50, 40, 60];

  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          {people.map((person) => (
            <Person key={person.url} person={person} />
          ))}
          {isLoading && <Spinner />}
        </div>
        <div style={{ alignSelf: "center" }}>
          <ApexChart series={mySeries} />
        </div>
      </div>
    </>
  );
};

export default People;
