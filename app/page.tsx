import ImageSlider from './components/ImageSlider'; // adjust path if needed
import ContactCard from './components/ContactCard'; // adjust path if needed
import { Phone, MessageSquare, Instagram, Send } from 'lucide-react';

const sliderImages = [
  {
    src: '/images/slider/Cricket-Match-Prediction-Sites-Betting-Tips.jpeg',
    alt: 'Cricket Stadium'
  },
  {
    src: '/images/slider/ipl.avif',
    alt: 'IPL Cricket Match'
  }
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Image Slider */}
      <ImageSlider images={sliderImages} />

      {/* Main content */}
      <div className="text-center mb-12 transform transition-all duration-500 hover:scale-105">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Cricket Match Prediction</h2>
        <p className="text-xl">Expert insights for match predictions and betting strategies</p>
      </div>

      <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8">Get in touch</h3>

      {/* Contact Icons Grid */}
      <div className="flex flex-wrap gap-2 justify-around">
        <ContactCard
          title="WhatsApp"
          href="https://wa.me/919503773632" // WhatsApp direct link
          icon={MessageSquare}
          iconBgColor="bg-green-500"
          hoverBgColor="hover:bg-green-900"
          className="w-100 md:w-1/4"
        />

        <ContactCard
          title="Telegram"
          href="https://t.me/chavhanexpert" // Telegram username link
          icon={Send}
          iconBgColor="bg-blue-500"
          hoverBgColor="hover:bg-blue-900"
          className="w-100 md:w-1/4"
        />

        {/* <ContactCard
          title="Instagram"
          href="https://www.instagram.com/abhishek.x85" // Instagram profile link
          icon={Instagram}
          iconBgColor="bg-gradient-to-tr from-purple-500 to-pink-500"
          hoverBgColor="hover:bg-purple-900"
          className="w-100 md:w-1/4"
        /> */}

        <ContactCard
          title="Phone"
          href="tel:+919503773632" // Phone call link
          icon={Phone}
          iconBgColor="bg-red-500"
          hoverBgColor="hover:bg-red-900"
          className="w-100 md:w-1/4"
        />
      </div>
    </div>
  );
}
