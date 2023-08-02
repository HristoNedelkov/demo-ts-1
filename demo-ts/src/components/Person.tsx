import { PersonType } from "../hooks/usePeople";

type PersonProps = {
  person: PersonType;
};

const Person = ({ person }: PersonProps) => {
  return (
    <div className="card" key={person.url} >
      <p>
        {person.name}
      </p>
    </div>
  );
};

export default Person;