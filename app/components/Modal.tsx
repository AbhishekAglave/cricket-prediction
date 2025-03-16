'use client';

import { useState } from 'react';// Importing as it is
import { XCircleIcon } from '@heroicons/react/24/solid';

export default function Modal({ children, btnText }: { children: React.ReactNode; btnText: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="py-2 px-4 text-nowrap flex items-center rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300"
      >
        {btnText}
      </button>

      {isOpen && (
        <div className="backdrop-blur fixed inset-0 z-50 flex items-center justify-center">
          <div>
            <div className="flex justify-end">
              <XCircleIcon onClick={closeModal} className="ml-2 h-[40px] w-[40px]" />
            </div>

            {children}
          </div>
        </div>
      )}
    </>
  );
}
