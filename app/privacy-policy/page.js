import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose max-w-none">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
          <p className="mb-4">
            This Privacy Policy describes how your personal information is collected, used, and shared when you visit
            portfolio.thefstack.com (the "Site").
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Personal Information We Collect</h2>
          <p className="mb-4">
            When you visit the Site, we automatically collect certain information about your device, including
            information about your web browser, IP address, time zone, and some of the cookies that are installed on
            your device.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Personal Information</h2>
          <p className="mb-4">
            We use the information that we collect to help us screen for potential risk and fraud, and more generally to
            improve and optimize our Site.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Sharing Your Personal Information</h2>
          <p className="mb-4">We do not share your Personal Information with third parties.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
          <p className="mb-4">
            If you are a European resident, you have the right to access personal information we hold about you and to
            ask that your personal information be corrected, updated, or deleted.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Retention</h2>
          <p className="mb-4">
            When you contact us through the Site, we will maintain your Contact Information for our records unless and
            until you ask us to delete this information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes</h2>
          <p className="mb-4">
            We may update this privacy policy from time to time in order to reflect, for example, changes to our
            practices or for other operational, legal or regulatory reasons.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">
            For more information about our privacy practices, if you have questions, or if you would like to make a
            complaint, please contact us by e-mail at the contact information provided on this site.
          </p>
        </div>

        <div className="mt-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
