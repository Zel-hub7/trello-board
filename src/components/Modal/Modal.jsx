import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import useOnClickOutside from "@hooks/useOnClickOutside";

const Modal = ({ show, onClose, children, className = "items-center justify-center" }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const modalRef = useRef();
  useOnClickOutside(modalRef, onClose);

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    setIsBrowser(true);
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  const modalContent = isBrowser && show && (
    <div className={`modal fixed left-0 right-0 top-0 bottom-0 bg-opacity-50 flex bg-black z-50 ${className}`}>
      <div className="w-full m-4 max-w-[480px]" ref={modalRef}>
        {children}
      </div>
    </div>
  );

  return isBrowser ? createPortal(modalContent, document.querySelector("#modal")) : null;
};

export default Modal;
