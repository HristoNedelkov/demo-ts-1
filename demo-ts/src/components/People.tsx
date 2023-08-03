import { useState } from "react";
import { LoadStateType, usePeople } from "../hooks/usePeople";
import Person from "./Person";
import Spinner from "./Spinner";

const People = () => {
  const [isLoading, setIsLoading] = useState<LoadStateType>(false);

  const changeIsLoading = (state: LoadStateType) => {
    setIsLoading(state);
  };
  const people = usePeople(changeIsLoading);
  return (
    <>
      {people.map((person) => (
        <Person key={person.url} person={person} />
      ))}
      {isLoading && <Spinner />}
    </>
  );
};

export default People;
