'use client';

import { useState } from 'react'; // Importing as it is
import { XCircleIcon } from '@heroicons/react/24/solid';

export default function Modal({ children, btnText }: { children: React.ReactNode; btnText: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={openModal} className="py-2 px-4 gradient-button">
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
