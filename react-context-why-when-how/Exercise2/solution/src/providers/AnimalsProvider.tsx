import { createContext, useEffect, useState } from "react";

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
  animals: Animals | null;
  refetchAnimals: () => void;
};

export const AnimalsContext = createContext<State>({
  animals: null,
  refetchAnimals: () => { },
});

interface AnimalsProviderProps {
  children: React.ReactNode;
}

export function AnimalsProvider({
  children
}: AnimalsProviderProps) {
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
    <AnimalsContext.Provider value={{
      animals,
      refetchAnimals: fetchAnimals
    }}>
      {children}
    </AnimalsContext.Provider >
  );
}