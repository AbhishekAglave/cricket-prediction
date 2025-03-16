'use client';

import { useState } from 'react';
import { Phone, MessageCircle, Copy, Check } from 'lucide-react';
import Link from 'next/link';
import { IUserLean } from '../lib/definitions';

export default function UserListItem({ user }: { user: IUserLean }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const mobileNumber = `${user.mobile}`;

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(mobileNumber)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((err) => {
          console.error('Failed to copy using clipboard API:', err);
          fallbackCopy(mobileNumber);
        });
    } else {
      fallbackCopy(mobileNumber);
    }
  };

  const fallbackCopy = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'absolute';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Unable to copy using execCommand', err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <div
      key={user._id}
      className="bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-5 flex items-center gap-4"
    >
      {/* Avatar */}
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
        {user.name?.charAt(0).toUpperCase()}
      </div>

      {/* User Info */}
      <div className="flex flex-col flex-1">
        <div className="flex gap-2">
          <h3 className="text-lg font-semibold text-gray-200">{user.name}</h3>
          <p className="text-gray-500">[{user.role}]</p>
        </div>
        <div className="flex items-center gap-6 mt-1">
          <p className="text-gray-400">{user.mobile}</p>

          {/* Phone */}
          <Link
            href={`tel:+91${user.mobile}`}
            className="text-gray-400 hover:text-red-500 transition-colors duration-200"
            title="Call"
          >
            <Phone size={20} />
          </Link>

          {/* WhatsApp */}
          <Link
            href={`https://wa.me/91${user.mobile}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-500 transition-colors duration-200"
            title="WhatsApp"
          >
            <MessageCircle size={20} />
          </Link>

          {/* Copy */}
          <button
            onClick={handleCopy}
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
            title="Copy Number"
          >
            {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
}
