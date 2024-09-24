import "./Toast.css";
import { useEffect, useState } from "react";
import EventBus from "./eventBus";
import { createPortal } from "react-dom";

interface ToastMessage {
  id: number;
  message: string;
}

const Toast = () => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const handleToastEvent = (toast: { message: String }) => {
      setToasts((prevToasts) => [...prevToasts, { id: Date.now(), ...toast }]);

      setTimeout(() => {
        setToasts((prevToasts) => prevToasts.slice(1));
      }, 1500);
    };

    const unsubscribe = EventBus.subscribe("SHOW_TOAST", handleToastEvent);

    return () => unsubscribe();
  }, []);

  return createPortal(
    <div className="toast-container">
      {toasts.map((toast, index) => (
        <div key={index} className="toast">
          {toast.message}
        </div>
      ))}
    </div>,
    document.body
  );
};

export default Toast;
