import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 gradient-text">About Us</h1>

      <p className="mb-4">
        Welcome to our All T20 Matches Insights platform! We specialize in providing thoughtful guesses and
        possibilities for all T20 matches. Our focus is on sharing valuable insights to enhance your excitement and
        engagement with various T20 leagues and international matches, such as IPL, BBL, S20, T10, and more.
      </p>

      <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
      <p className="mb-4">
        We offer toss outcome possibilities, winning chances, and match result guessing for every T20 game. Our insights
        are based on team performances, player form, and match conditions to help fans explore the possibilities before
        the action begins. Whether it's the IPL, BBL, S20, T10, or any other T20 tournament, we've got you covered.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
      <p className="mb-4">
        Our mission is to provide free and reliable T20 match insights to cricket lovers around the world. We aim to
        make T20 matches more exciting by sharing our guesses and discussions—completely free of cost and without any
        registration. From IPL and BBL to S20 and T10 leagues, our goal is to enhance your match-day experience.
      </p>

      <h2 className="text-2xl font-semibold mb-2">No Real Money Involvement</h2>
      <p className="mb-4">
        We do not support or promote any form of real money betting or gambling. All our T20 match insights and guesses
        are shared purely for informational and entertainment purposes. We prioritize responsible use and fan enjoyment.
      </p>

      <h2 className="text-2xl font-semibold mb-2">User Privacy</h2>
      <p className="mb-4">
        Your privacy is important to us. You can explore our T20 match insights and content without sharing any personal
        information. We do not collect or store any user data.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Free T20 toss guessing and match outcome discussions</li>
        <li>Winning possibilities based on team analysis and conditions</li>
        <li>No registration or payment required</li>
        <li>We respect your privacy and ensure a safe experience</li>
        <li>Insights for popular leagues like IPL, BBL, S20, T10, and more</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">
        <Link href="/contact-us" className="link">
          Contact Us
        </Link>
      </h2>
      <p className="mb-4">
        Have questions, suggestions, or feedback about our T20 match insights? Feel free to{' '}
        <Link href="/contact-us" className="link font-bold">
          reach out to us
        </Link>{' '}
        anytime!
      </p>
    </div>
  );
};

export default AboutPage;
