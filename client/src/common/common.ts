import Swal, { SweetAlertIcon } from "sweetalert2";
import { STEP_SIGN, TOKEN } from "./const";

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

export const Alert = (title: string, icon: SweetAlertIcon | undefined) => {
  Toast.fire({
    title,
    icon,
  });
};

// 로그인
export const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

// 기한이 만료 || 존재하지 않으면 false
export const verifyByToken = (): boolean => {
  const token = localStorage.getItem("token");
  if (token === null) {
    return false;
  }
  const expire: number = Number(token.split("-")[2]);
  const cur: number = new Date().getTime();
  return cur < expire;
};

// number pk를 반환
export const getUserPkByToken = (): number => {
  const token = localStorage.getItem("token");
  if (token === null) {
    return 0;
  }
  const pk: string = token.split("-")[TOKEN.PK_NODE];
  return Number(pk);
};

// step이라면 true, 아니면 false
export const isStepByToken = (): boolean => {
  const token = localStorage.getItem("token");
  if (token === null) {
    return false;
  }
  const step: string = token.split("-")[TOKEN.STEP_NODE];
  return step === STEP_SIGN.STEP ? true : false;
};
