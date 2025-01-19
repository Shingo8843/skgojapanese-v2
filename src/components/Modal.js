"use client";

export default function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center w-full h-full">
      <div className="bg-white w-full h-full max-w-none relative flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          // change size by screen size
          className="absolute top-0 right-0 m-4 text-2xl sm:text-3xl lg:text-4xl"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Content */}
        <div className="flex-grow overflow-y-auto sm:p-0 md:p-3 lg:p-6">{children}</div>
      </div>
    </div>
  );
}
