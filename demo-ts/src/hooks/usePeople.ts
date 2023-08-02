import { useEffect, useState } from "react";

export type PersonType = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

export const usePeople = (): PersonType[] => {
  const [people, setPeople] = useState<PersonType[]>([]);

  const fetchPeople = async () => {
    const response = await fetch("https://swapi.dev/api/people");
    const data = await response.json();
    setPeople(data.results);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return people;
};