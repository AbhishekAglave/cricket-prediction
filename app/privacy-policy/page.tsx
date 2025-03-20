import Link from 'next/link';
import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        Welcome to our IPL Match Insights platform! We value your privacy and are committed to protecting any
        information related to your experience here.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
      <p className="mb-4">
        We do not collect any personal information from users. You can access and use our website freely without sharing
        any personal data.
      </p>

      <h2 className="text-2xl font-semibold mb-2">How We Use Information</h2>
      <p className="mb-4">
        Since we do not collect personal information, we do not use, store, or share any data related to our users. You
        can enjoy our IPL match insights and guesses without any concerns about your privacy.
      </p>

      <h2 className="text-2xl font-semibold mb-2">No Paid Services</h2>
      <p className="mb-4">
        We do not offer any paid services. All IPL match guesses, toss possibilities, and winning insights are shared
        for free. There are no subscriptions, registrations, or payments required to access our content.
      </p>

      <h2 className="text-2xl font-semibold mb-2">No Real Money Involvement</h2>
      <p className="mb-4">
        This website does not promote or support real money betting or gambling of any kind. All the IPL-related content
        we provide is strictly for informational and entertainment purposes. We encourage responsible use of our
        insights.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Third-Party Links</h2>
      <p className="mb-4">
        Our website may include links to third-party sites for additional information or reference. Please note, we are
        not responsible for the privacy policies or content of these external sites.
      </p>

      <h2 className="text-2xl font-semibold mb-2">User Privacy</h2>
      <p className="mb-4">
        We respect your privacy. You are not required to register, sign up, or provide any personal details to use our
        IPL match insights and possibilities.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Changes to This Policy</h2>
      <p className="mb-4">
        We may occasionally update our Privacy Policy to reflect changes in our practices or services. Any updates will
        be posted on this page, and the changes will be effective immediately upon posting.
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
