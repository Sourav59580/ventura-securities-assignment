import dummyIPOList from "../../../shared/lib/dummy-ipo-data";
import { IPOData } from "../model/types";

export const getIPOList = async (): Promise<IPOData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyIPOList);
    }, 500);
  });
};
