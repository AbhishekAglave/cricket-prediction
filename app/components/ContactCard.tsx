import React from 'react';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ContactCardProps {
  title: string;
  href: string;
  icon: LucideIcon;
  iconBgColor: string;
  hoverBgColor: string;
  className?: string;
}

export default function ContactCard({
  title,
  href,
  icon: Icon,
  iconBgColor,
  hoverBgColor,
  className = ''
}: ContactCardProps) {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2 ${hoverBgColor} ${className}`}
    >
      <div className={`w-16 h-16 flex items-center justify-center ${iconBgColor} rounded-full mb-4`}>
        <Icon size={32} />
      </div>
      <span className="text-lg font-medium">{title}</span>
    </Link>
  );
}
