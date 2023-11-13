import CowbirdContext from "./provider";
import { useContext, useEffect, useState } from "react";

type Year = string;

const baseUrl = "https://cowbird-staging.fly.dev/groups/bun-experiment/mocks";

export function useYears() {
  const [years, setYears] = useState<Year[]>([]);
  const { cbFetch } = useContext(CowbirdContext);

  useEffect(() => {
    const fetchYears = async () => {
      const response = await cbFetch(`${baseUrl}/years`);
      const data = await response.json();

      setYears(data.data);
    };
    fetchYears();
  }, [cbFetch]);

  return {
    years
  };
}
