import dummyIPOList from "../../../shared/lib/dummy-ipo-data";
import { IPOData } from "../model/types";

export const getIPODetails = async (id: number): Promise<IPOData | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const ipo = dummyIPOList.find((ipo) => ipo.id === id);
      resolve(ipo || null);
    }, 500);
  });
};
