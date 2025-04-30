import Link from "next/link"

export default function Terms() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="prose max-w-none">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to portfolio.thefstack.com. These Terms of Service govern your use of our website located at
            portfolio.thefstack.com (together or individually "Service").
          </p>
          <p className="mb-4">
            By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the
            terms then you may not access the Service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Intellectual Property</h2>
          <p className="mb-4">
            The Service and its original content, features, and functionality are and will remain the exclusive property
            of thefstack and its licensors. The Service is protected by copyright, trademark, and other laws of both
            India and foreign countries. Our trademarks and trade dress may not be used in connection with any product
            or service without the prior written consent of thefstack.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Links To Other Web Sites</h2>
          <p className="mb-4">
            Our Service may contain links to third-party web sites or services that are not owned or controlled by
            thefstack.
          </p>
          <p className="mb-4">
            thefstack has no control over, and assumes no responsibility for, the content, privacy policies, or
            practices of any third party web sites or services. You further acknowledge and agree that thefstack shall
            not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused
            by or in connection with use of or reliance on any such content, goods or services available on or through
            any such web sites or services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitation Of Liability</h2>
          <p className="mb-4">
            In no event shall thefstack, nor its directors, employees, partners, agents, suppliers, or affiliates, be
            liable for any indirect, incidental, special, consequential or punitive damages, including without
            limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to
            or use of or inability to access or use the Service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Changes</h2>
          <p className="mb-4">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
            material we will try to provide at least 30 days notice prior to any new terms taking effect. What
            constitutes a material change will be determined at our sole discretion.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us through the contact form on this site.
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
