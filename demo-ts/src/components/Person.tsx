import { PersonType } from "../hooks/usePeople";

type PersonProps = {
  person: PersonType;
};

const Person = ({ person }: PersonProps) => {
  function getOnlineState(): "online" | "offline" {
    if (person.name.length > 5) {
      return "offline";
    }
    return "online";
  }

  function showStatus(state: "online" | "offline") {
    if (state === "online") {
      return "currently " + state;
    }
    return "currently " + state;
  }

  return (
    <div className="card" key={person.url} style={{ margin: 0, padding: 0 }}>
      <p>
        {person.name} is {showStatus(getOnlineState())}.
      </p>
    </div>
  );
};

export default Person;
