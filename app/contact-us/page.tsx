import ContactCard from '../components/ContactCard'; // adjust path if needed
import { Phone, MessageCircle, Instagram, Send } from 'lucide-react';
import ImageSlider from '../components/ImageSlider';

const sliderImages = [
  {
    src: '/images/slider/ipl.avif',
    alt: 'IPL Cricket Match'
  },
  {
    src: '/images/slider/ipl.avif',
    alt: 'IPL Cricket Match'
  }
];

const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <ImageSlider images={sliderImages} />
      {/* Main content */}
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold mb-4">
          Cricket Match Insights, Winning Possibilities and Toss Winner Guessing
        </h1>
        <p className="text-xl">
          Stay ahead with expert analysis, toss guessing, results guessing, winning possibilities and strategic insights
          on upcoming cricket matches.
        </p>
      </div>

      <p className="text-center mb-8 text-lg">
        Reach out to us through any of the platforms below and we’ll get back to you as soon as possible.
      </p>

      <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8">Get in touch</h3>

      {/* Contact Icons Grid */}
      <div className="flex flex-wrap gap-2 justify-around">
        <ContactCard
          title="WhatsApp"
          href="https://wa.me/919503773632?text=Hi%2C%20I%20need%20a%20prediction" // WhatsApp direct link
          icon={MessageCircle}
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
};

export default ContactUs;
