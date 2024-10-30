import { useEffect, useState } from "react";
import { useResizeListener } from 'primereact/hooks';

import { IPOData } from "./types";
import { getIPOList } from "../api/get-ipo";

export const useFetchIPOList = () => {
  const [data, setData] = useState<IPOData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      const result = await getIPOList();
      setData(result);
      setLoading(false);
    };

    getData();
  }, []);

  return { data, loading };
};
