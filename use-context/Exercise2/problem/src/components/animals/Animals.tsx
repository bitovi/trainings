import React, { createContext, useEffect, useState } from "react";
import { Walkers } from "./Walkers";
import { Flyers } from "./Flyers";
import { Swimmers } from "./Swimmers";
import { RenderCounter } from "../RenderCounter";
import { Header } from "./Header";

const animalsUrl =
  "https://cowbird-staging.fly.dev/groups/bitovi/mocks/favoriteAnimals";

export type Animals = {
  bear: string;
  bird: string;
  cat: string;
  cetacean: string;
  cow: string;
  crocodilia: string;
};

type State = {
  animals: Animals;
  refetchAnimals: () => void;
};

export const AnimalContext = createContext<State>({
  animals: null,
  refetchAnimals: () => { }
});


export function AnimalWrapper() {
  const [animals, setAnimals] = useState<Animals>();

  const fetchAnimals = async () => {
    const response = await fetch(animalsUrl);
    const animals: Animals = await response.json();
    setAnimals(animals);
  };

  useEffect(() => {
    fetchAnimals();
  }, []);

  if (!animals) {
    return null;
  }

  return (
    <RenderCounter>
      <Header reload={fetchAnimals} />
      <Walkers bear={animals.bear} cat={animals.cat} cow={animals.cow} />
      <Flyers bird={animals.bird} />
      <Swimmers cetacean={animals.cetacean} crocodilia={animals.crocodilia} />
    </RenderCounter>
  );
}
