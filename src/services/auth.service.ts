import { authKey } from "@/constants/storageKey";
import { decodeToken } from "@/utils/jwt";
import { setToLocalStorage } from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken as string);
};

export const getUserInfo = () => {
  const authToken = localStorage.getItem(authKey);
  if (authToken) {
    const decodeData = decodeToken(authToken);
    return decodeData;
  } else return "";
};

export const isLoggedIn = () => {
  const authToken = localStorage.getItem(authKey);
  return !!authToken;
};
