import { useEffect, useState } from "react";
import { IPOData } from "./types";
import { getIPODetails } from "../api/get-ipo-details";

export const useFetchIPODetails = (id: number) => {
  const [data, setData] = useState<IPOData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      const result = await getIPODetails(id);
      setData(result);
      setLoading(false);
    };

    if (id) getData();
  }, [id]);

  return { data, loading };
};
