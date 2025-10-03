"use client";

import { useEffect, useState } from "react";

export default function MessageBox({ message, type = 'success', isVisible, onClose }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        setTimeout(() => onClose(), 500);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible && !show) return null;

  const bgColor = type === 'success' ? 'bg-green-600' : 'bg-red-600';

  return (
    <div className={`fixed top-24 left-1/2 -translate-x-1/2 z-[100] w-full max-w-sm p-4 rounded-xl shadow-lg text-center font-semibold message-box ${bgColor} text-white ${show ? 'opacity-100' : 'opacity-0'}`}>
      {message}
    </div>
  );
}
