import { Id, toast } from "react-toastify";

let idLoadingModal: Id;

export const correctAction = (message: string) => toast.success(message);
export const wrongAction = (message: string) => toast.error(message);
export const setLoadingOn = (message: string) => {
  idLoadingModal = toast.loading(message);
};
export const setLoadingOff = () => toast.dismiss(idLoadingModal);
