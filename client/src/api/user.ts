import axios from "axios";

export const test = async () => {
  const res = await axios.get("http://localhost:8080/");
  return res;
};
