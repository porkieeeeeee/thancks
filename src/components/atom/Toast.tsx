import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export enum EToastType {
    SUCCESS = "success",
    ERROR = "error",
}

interface IToastProps {
    type: EToastType;
    message: string;
}

export const showToast = ({ type, message }: IToastProps) => {
    switch (type) {
        case EToastType.SUCCESS:
            toast.success(message);
            break;
        case EToastType.ERROR:
            toast.error(message);
            break;
        default:
            toast.info(message);
            break;
    }
};

const Toast = () => {
    return <ToastContainer position='top-right' autoClose={2000} hideProgressBar closeOnClick theme='dark' limit={1} />;
};

export default Toast;
