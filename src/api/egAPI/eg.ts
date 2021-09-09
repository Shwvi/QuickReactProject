import { fakeReq } from "../fakeReq";
import data from "./mock/data.json";
// api fetch orgin by env
const apiUrl = "";

export function getXXX() {
  const res = __DEV__
    ? fakeReq({ data, time: 3000 })
    : fetch(apiUrl).then((d) => d.json());
  return res;
}
