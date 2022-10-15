import { toast } from "react-toastify";


export const notify = (type, msg) => {
    switch (true) {
      case type === "error":
        toast.error(msg, {
          autoClose: 2000,
        });
        break;
      case type === "warn":
        toast.warning(msg, {
          autoClose: 2000,
        });
        break;
      case type === "success":
      default:
        toast.success(msg, {
          autoClose: 2000,
        });
        break;
    }
  };