import Swal, { SweetAlertIcon } from "sweetalert2";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const Toast = Swal.mixin({
  toast: true,
  position: "center",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const alert = (title: string, icon: SweetAlertIcon | undefined) => {
  Toast.fire({
    title,
    icon,
  });
};

export const guardAlert = () => {
  Toast.fire({
    title: "내년의 청건부산을 기대해주세요!",
    icon: "info",
  });
};

// 로그인
export const setToken = (token: string) => {
  const [pk, expire] = token.split("-");
  cookies.set("pk", pk);
  cookies.set("expire", expire);
};

// 로그아웃 || 만료
export const deleteToken = () => {
  cookies.remove("pk");
  cookies.remove("expire");
};

// 기한이 만료 || 존재하지 않으면 false
// 만료되었다면 자동 제거
export const verifyByToken = (): boolean => {
  const token = cookies.get("expire");
  if (token === undefined) {
    return false;
  }
  const expire: number = Number(cookies.get("expire"));
  const cur: number = new Date().getTime();
  if (cur >= expire) {
    deleteToken();
  }
  return cur < expire;
};

// number pk를 반환
export const getUserIdByToken = (): number => {
  const token = cookies.get("pk");
  if (token === undefined) {
    return 0;
  }
  const pk: string = cookies.get("pk");
  return Number(pk);
};

export const setPopupToken = (tokenName: string) => {
  if (cookies.get(tokenName)) {
    return;
  }
  const expires = new Date();
  expires.setHours(expires.getHours() + 24);
  cookies.set(tokenName, tokenName, { path: "/", expires });
};

export const verifyByPopupToken = (tokenName: string): boolean => {
  const popupToken = cookies.get(tokenName);
  return popupToken !== undefined;
};
