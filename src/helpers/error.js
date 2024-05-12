import { toast } from "react-toastify";

export const getErrorMessage = (error) => {
  const message = error?.response?.data?.message;
  return message && typeof message === "string"
    ? message
    : "Something went wrong";
};

export const showErrorMessage = (error) => {
  if (typeof error === "string") {
    toast.error(error);
  } else {
    toast.error(getErrorMessage(error));
  }
};
