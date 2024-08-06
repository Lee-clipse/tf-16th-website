import axios from "axios";
import { HOST } from "../common/const";

const API_HOST = HOST.LOCAL;

export const reqUserLogin = async (name: string, phoneNumber: string) => {
  const res = await axios.get(`${API_HOST}/user/login?name=${name}&phoneNumber=${phoneNumber}`);
  return res;
};

export const reqUserRegister = async (body: object) => {
  const res = await axios.post(`${API_HOST}/user/register`, body);
  return res;
};

export const reqUserData = async (pk: string) => {
  const res = await axios.get(`${API_HOST}/user/get?pk=${pk}`);
  return res;
};

/*
  const [isLoading, setIsLoading] = useState(false);

  setIsLoading(true);
  setIsLoading(false);

  {isLoading && <Loading />}
*/
