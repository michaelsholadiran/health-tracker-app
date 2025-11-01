import { useEffect } from 'react';
import { CloseIcon } from './Icons';

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-slate-900/75 backdrop-blur-sm flex justify-center items-center z-[1000] p-5"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-[560px] max-h-[90vh] overflow-auto transition-all border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center px-7 py-6 border-b border-gray-200 bg-gradient-to-br from-white to-gray-50">
          <h2 className="m-0 text-gray-900 text-2xl font-bold tracking-tight">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="bg-gray-100 border-none cursor-pointer text-gray-600 p-2 w-9 h-9 flex items-center justify-center rounded-lg transition-all hover:bg-gray-200 hover:text-gray-900"
          >
            <CloseIcon size={20} color="currentColor" />
          </button>
        </div>
        <div className="p-7">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
