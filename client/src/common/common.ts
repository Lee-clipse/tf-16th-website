import Swal, { SweetAlertIcon } from "sweetalert2";

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
