import Link from 'next/link';
import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 gradient-text">Privacy Policy</h1>

      <p className="mb-4">
        Welcome to our T20 Match Insights platform! We value your privacy and are committed to ensuring a safe and
        enjoyable experience while you explore our content.
      </p>

      <h2 className="text-2xl font-semibold mb-2">How You Use Our Platform</h2>
      <p className="mb-4">
        You can freely access and enjoy our T20 match insights without the need for registration, sign-ups, or
        memberships. Whether you're interested in IPL, BBL, S20, T10, or any other T20 leagues, our platform remains
        open and accessible to everyone.
      </p>

      <h2 className="text-2xl font-semibold mb-2">How We Operate</h2>
      <p className="mb-4">
        Our focus is on providing thoughtful guesses, match insights, and possibilities for T20 cricket matches across
        various leagues, including IPL, BBL, S20, T10, and more. We aim to create an engaging experience without any
        requirements or barriers.
      </p>

      <h2 className="text-2xl font-semibold mb-2">No Paid Services</h2>
      <p className="mb-4">
        We do not offer any paid services. All T20 match guesses, toss possibilities, and winning insights are shared
        completely free of cost. There are no subscriptions, registrations, or payments required to explore our content.
      </p>

      <h2 className="text-2xl font-semibold mb-2">No Real Money Involvement</h2>
      <p className="mb-4">
        This website does not support or promote real money betting or gambling of any kind. All content related to T20
        leagues such as IPL, BBL, S20, T10, and others is shared solely for informational and entertainment purposes. We
        encourage responsible enjoyment of our insights.
      </p>

      <h2 className="text-2xl font-semibold mb-2">User Experience & Privacy</h2>
      <p className="mb-4">
        Our platform is designed to respect your privacy. You are welcome to explore our match insights and discussions
        related to various T20 leagues without any interruptions or concerns. We prioritize creating a safe and
        transparent experience for cricket fans around the world.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Changes to This Policy</h2>
      <p className="mb-4">
        We may update our Privacy Policy from time to time to reflect changes in our practices or services. Any updates
        will be posted on this page and will take effect immediately upon posting.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        <Link href="/contact-us" className="link">
          Contact Us
        </Link>
      </h2>
      <p className="mb-4">
        If you have any questions or concerns regarding this Privacy Policy, feel free to{' '}
        <Link href="/contact-us" className="link font-bold">
          contact us
        </Link>{' '}
        anytime!
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
