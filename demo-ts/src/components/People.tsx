import { usePeople } from "../hooks/usePeople";
import Person from "./Person";

const People = () => {
  const people = usePeople();

  return (
    <>
      {people.map((person) => (
        <Person key={person.url} person={person} />
      ))}
      {people.length === 0 && <p>Loading...</p>}
    </>
  );
};

export default People;