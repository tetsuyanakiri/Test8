import React from 'react';

interface ToastProps {
  show: boolean;
  title: string;
  message: string;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ show, title, message, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm p-4 rounded-xl bg-black text-white shadow-2xl flex items-center gap-3 animate-bounce-short border border-white/10">
      <div className="w-8 h-8 rounded-full bg-[#ffe088] text-[#241a00] flex items-center justify-center shrink-0">
        <span className="material-symbols-outlined text-[18px]">info</span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-sm font-bold text-[#ffe088]">{title}</div>
        <div className="text-xs text-[#e4e2de] truncate">{message}</div>
      </div>
      <button
        onClick={onClose}
        className="text-white/60 hover:text-white p-1 cursor-pointer shrink-0"
      >
        <span className="material-symbols-outlined text-[18px]">close</span>
      </button>
    </div>
  );
};
