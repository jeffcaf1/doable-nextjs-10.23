import "./styles.css";

export async function generateMetadata({ params }: { params: { domain: string } }) {
  return {
    title: "Privacy Policy",
    description: "At Doable, we very much appreciate your readership and understand the importance of your personal privacy. This policy is available to help you understand the handling of information while you're on our sites.",
    openGraph: {
      type: "website",
      url: `https://${params.domain}/privacy`,
      siteName: "Doable | News + Thought Leadership,
      title: "Privacy Policy",
      images: ["https://default-doable.b-cdn.net/live-site-images/doable-og-image.png"],
      locale: "en_US",
      description: "At Doable, we very much appreciate your readership and understand the importance of your personal privacy. This policy is available to help you understand the handling of information while you're on our sites.",
    },
    twitter: {
      card: 'summary_large_image',
      site: '@doablehq',
    }
  };
}

export default function Privacy() {
  return (
    <main className="page-main">
      <section className="page-header-outer">
        <header>
          <div className="inner page-header-inner">
            <div className="page-header-inner-wrapper">
              <h1 className="page-header-title">Privacy Policy</h1>
            </div>
          </div>
        </header>
      </section>
      <section className="page-body-outer">
        <div className="inner">
          <div className="page-inner">
            <p>This Privacy Policy ("Privacy Policy") is applicable to Inspo Digital, Inc (dba Doable), a Delaware corporation, and governs the collection, use, and disclosure of information through the Doable service (the "Doable Service"). By accessing the Doable Service, you agree to the terms outlined in this Privacy Policy.</p>

            <p>If you have any questions or concerns regarding this Privacy Policy, you can reach out to us at <a className="body-links" href="mailto:hello@doablehq.com">hello@doablehq.com</a>.</p>

            <h2>Definitions</h2>

            <p>In this Privacy Policy, the following terms have the meanings ascribed to them:</p>

            <h2>Information We Collect and How We Collect It</h2>

            <ol>
              <li>
                <strong>Information You Provide To Us:</strong>
                <p>When you interact with us, we collect the information you voluntarily provide, including Personal Information like your email address.</p>
              </li>
            </ol>

            <h2>How We Use Information</h2>

            <p>We use the collected Information for legitimate business purposes, including:</p>
            <ol>
              <li>Providing and improving the Doable Service.</li>
            </ol>

            <h2>When and With Whom We May Disclose Information</h2>

            <p>We disclose Information only as described in this Privacy Policy. Disclosure may occur with:</p>
            <ol>
              <li>Authorized Parties with User Consent.</li>
            </ol>

            <h2>Third Party Data Collection</h2>

            <ol>
              <li>
                <strong>Third Party Platforms:</strong>
                <p>Providers of Third Party Platforms may collect Personal Information and Usage and Device Information when you use applications running on those platforms.</p>
              </li>
            </ol>

            <h2>Choices You Have to Limit Use and Opt-Out of Information Sharing</h2>

            <ol>
              <li>
                <strong>Third Party Platforms:</strong>
                <p>Users accessing Doable Content via Third Party Platforms should review the platform's privacy policy for opt-out options regarding information sharing with Doable.</p>
              </li>
            </ol>

            <h2>How We Secure Your Information</h2>

            <p>We employ physical, electronic, administrative, and procedural safeguards to protect Information, including Personal Information. While we implement security measures, we cannot guarantee absolute security over the internet.</p>

            <h2>Additional State Privacy Laws</h2>

            <p>For residents of states with privacy laws (e.g., Connecticut, Colorado, Virginia), we provide opt-out information related to the use and disclosure of Usage and Device Information by our Audience Measurement Partner.</p>

            <h2>Using Our Services Outside of the United States</h2>

            <p>This Privacy Policy covers information collected from residents of the United States. If using the Doable Service from outside the United States, users understand and consent to the transfer, storage, and processing of their information in the United States.</p>

            <h2>Changes to This Privacy Policy</h2>

            <p>We may modify this Privacy Policy, and any material changes will be communicated by posting the revised policy on the Doable website. Users are encouraged to periodically review the policy, and continued use of the Doable Service after the effective date implies acceptance of the updated Privacy Policy.</p>

            <h2>How to Contact Us</h2>

            <p>For questions about this Privacy Policy, contact us at: <a className="body-links" href="mailto:hello@doablehq.com">hello@doablehq.com</a></p>

            <p>Effective: February 1, 2024</p>          </div>
        </div>
      </section>
    </main>
  );
}
