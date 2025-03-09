import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactCardProps {
  title: string;
  href: string;
  icon: LucideIcon;
  bgColor: string; // color for the icon background
  hoverBgColor: string; // color for the card hover background
}

export default function ContactCard({ title, href, icon: Icon, bgColor, hoverBgColor }: ContactCardProps) {
  return (
    <a
      href={href}
      className={`flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2 ${hoverBgColor}`}
    >
      <div className={`w-16 h-16 flex items-center justify-center ${bgColor} text-white rounded-full mb-4`}>
        <Icon size={32} />
      </div>
      <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{title}</span>
    </a>
  );
}
