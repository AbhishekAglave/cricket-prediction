import ImageSlider from './components/ImageSlider'; // adjust path if needed
import ContactCard from './components/ContactCard'; // adjust path if needed
import { Phone, MessageSquare, Instagram, Send } from 'lucide-react';

const sliderImages = [
  {
    src: '/images/slider/1.webp',
    alt: 'T20 Cricket Tournament',
    caption: 'T20 Predictions'
  },
  {
    caption: 'Match Day Analysis',
    src: '/images/slider/2.jpg',
    alt: 'Cricket World Cup'
  },
  {
    src: '/images/slider/3.avif',
    alt: 'IPL Cricket Match',
    caption: 'IPL 2025'
  },
  {
    src: '/images/slider/4.webp',
    alt: 'Cricket Stadium',
    caption: 'World Cup Highlights'
  }
];

export default function Home() {
  return (
    <div className="">
      {/* Image Slider */}
      <ImageSlider images={sliderImages} />

      {/* Main content */}
      <div className="text-center mb-12 transform transition-all duration-500 hover:scale-105">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">Get Best Consultation</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Expert insights for match predictions and betting strategies
        </p>
      </div>

      <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
        Get in touch
      </h3>

      {/* Contact Icons Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <ContactCard
          title="WhatsApp"
          href="https://wa.me/999999999" // WhatsApp direct link
          icon={MessageSquare}
          bgColor="bg-green-500"
          hoverBgColor="hover:bg-green-50 dark:hover:bg-green-900"
        />

        <ContactCard
          title="Telegram"
          href="https://t.me/myxusername" // Telegram username link
          icon={Send}
          bgColor="bg-blue-500"
          hoverBgColor="hover:bg-blue-50 dark:hover:bg-blue-900"
        />

        <ContactCard
          title="Instagram"
          href="https://www.instagram.com/myxusername" // Instagram profile link
          icon={Instagram}
          bgColor="bg-gradient-to-tr from-purple-500 to-pink-500"
          hoverBgColor="hover:bg-purple-50 dark:hover:bg-purple-900"
        />

        <ContactCard
          title="Phone"
          href="tel:999999999" // Phone call link
          icon={Phone}
          bgColor="bg-red-500"
          hoverBgColor="hover:bg-red-50 dark:hover:bg-red-900"
        />
      </div>
    </div>
  );
}
