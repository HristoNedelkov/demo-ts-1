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

export type LoadStateType = false | true;
type changeIsLoadingType = (value: LoadStateType) => void;

export const usePeople = (
  changeIsLoading: changeIsLoadingType
): PersonType[] => {
  const [people, setPeople] = useState<PersonType[]>([]);

  const fetchPeople = async () => {
    try {
      changeIsLoading(true);
      const response = await fetch("https://swapi.dev/api/people");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setPeople(data.results);
      changeIsLoading(false);
    } catch (e) {
      changeIsLoading(false);
      throw new Error(e);
    }
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return people;
};
