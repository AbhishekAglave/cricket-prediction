import Link from 'next/link';
import ImageSlider from './components/ImageSlider'; // adjust path if needed
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const sliderImages = [
  {
    src: '/images/slider/cricket-illustration.jpg',
    alt: 'Cricket'
  }
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Image Slider */}
      <ImageSlider images={sliderImages} />

      {/* Main content */}
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold mb-4 gradient-text">
          Cricket Match Insights, Winning Possibilities and Toss Winner Guessing
        </h1>
        <p className="text-xl">
          Stay ahead with expert analysis, toss guessing, results guessing, winning possibilities and strategic insights
          on upcoming cricket matches.
        </p>
      </div>

      <div className="flex justify-center">
        <Link href={'/contact-us'} className="mb-4 py-2 px-4 gradient-button">
          <span>Chat With Us</span>
          <span className="ml-1 animate-wiggle-horizontal">
            <ChevronRightIcon className="h-[24px] w-[24px]" />
          </span>
        </Link>
      </div>

      {/* About Section */}
      <section className="mb-4 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
          Why Follow Our Match Insights and Guessing?
        </h2>

        <p className="text-lg text-center mb-6">
          We are passionate cricket analysts. We share thoughtful guesses on toss outcomes and match results, offering
          insights to help cricket fans explore possibilities and enjoy the excitement of every game.
        </p>

        <div className="flex justify-center">
          <ul className="list-disc text-left space-y-2 text-lg">
            <li>Toss outcome possibilities and insights</li>
            <li>Possible match results and team outcomes</li>
            <li>Winning chances based on team strengths</li>
            <li>Pre-match outcome discussions and guesses</li>
          </ul>
        </div>
      </section>

      {/* Get in Touch */}
      <h3 className="text-2xl md:text-3xl font-semibold text-center mb-4">Get in touch</h3>
      <div className="flex justify-center">
        <Link href={'/contact-us'} className="mb-4 py-2 px-4 gradient-button">
          <span>Chat With Us</span>
          <span className="ml-1 animate-wiggle-horizontal">
            <ChevronRightIcon className="h-[24px] w-[24px]" />
          </span>
        </Link>
      </div>

      {/* Disclaimer Section */}
      <section className="mb-4 px-4 text-sm text-gray-500 text-center">
        <p>
          Disclaimer: The information and analysis provided on this platform are for informational and entertainment
          purposes only. We do not encourage or promote any form of gambling or betting.
        </p>
      </section>
    </div>
  );
}
