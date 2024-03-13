import "./styles.css";

export async function generateMetadata({ params }: { params: { domain: string } }) {
  return {
    title: "Terms and Conditions",
    description: "These Terms of Service govern each website, mobile site, application, and/or other service, regardless of how distributed, transmitted, published, or broadcast provided by Doable, its parent, subsidiaries and/or affiliates.",
    openGraph: {
      type: "website",
      url: `https://${params.domain}/terms`,
      siteName: "Doable | News + Thought Leadership,
      title: "Terms and Conditions",
      images: ["https://default-doable.b-cdn.net/live-site-images/doable-og-image.png"],
      locale: "en_US",
      description: "These Terms of Service govern each website, mobile site, application, and/or other service, regardless of how distributed, transmitted, published, or broadcast provided by Doable, its parent, subsidiaries and/or affiliates.",
    },
    twitter: {
      card: 'summary_large_image',
      site: '@doablehq',
    }
  };
}

export default function Terms() {
  return (
    <main className="page-main">
      <section className="page-header-outer">
        <header>
          <div className="inner page-header-inner">
            <div className="page-header-inner-wrapper">
              <h1 className="page-header-title">Terms and Conditions</h1>
            </div>
          </div>
        </header>
      </section>
      <section className="page-body-outer">
          <div className="inner">
          <div className="page-inner">
          <h2>Overview</h2>
    <p>This Terms of Service Agreement (“Agreement”) is between you and Inspo Digital, Inc (dba Doable). (“Doable”, “we” or “us”). The Agreement governs your use of our service (the “Doable Service”), which allows consumers like you to have access to and view certain on-demand content and live-streaming content (“Doable Content”) for a limited time for no fee. The Doable Service includes the Site, the Doable Content and the Doable Apps.</p>

    <p>When you use the Doable Service, by viewing Doable Content, or accessing the Doable website (“Site”) or downloading one of the mobile applications (“Doable Apps”), you represent that (1) you have read, understood, and agree to be bound by this Agreement, (2) you are of legal age to form a binding contract with Doable, and (3) you have the authority to enter into this Agreement personally. The term “you” refers to the individual or legal entity, as applicable, identified as the user when you register on the website. IF YOU DO NOT AGREE TO BE BOUND BY THIS AGREEMENT, YOU MAY NOT ACCESS OR USE THIS SITE OR THE Doable SERVICE.</p>

    <p>PLEASE BE AWARE OF THE ARBITRATION SECTION OF THIS AGREEMENT, BELOW, CONTAINS PROVISIONS GOVERNING HOW CLAIMS THAT YOU AND WE HAVE AGAINST EACH OTHER ARE RESOLVED, INCLUDING, WITHOUT LIMITATION, ANY CLAIMS THAT AROSE OR WERE ASSERTED PRIOR TO THE EFFECTIVE DATE OF THIS AGREEMENT. IN PARTICULAR, IT CONTAINS AN ARBITRATION AGREEMENT WHICH WILL, WITH LIMITED EXCEPTIONS, REQUIRE DISPUTES BETWEEN US TO BE SUBMITTED TO BINDING AND FINAL ARBITRATION. UNLESS YOU OPT OUT OF THE ARBITRATION AGREEMENT: (1) YOU WILL ONLY BE PERMITTED TO PURSUE CLAIMS AND SEEK RELIEF AGAINST US ON AN INDIVIDUAL BASIS, NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS OR REPRESENTATIVE ACTION OR PROCEEDING; AND (2) YOU ARE WAIVING YOUR RIGHT TO SEEK RELIEF IN A COURT OF LAW AND TO HAVE A JURY TRIAL ON YOUR CLAIMS.</p>

    <p>ANY DISPUTE OR CLAIM RELATING IN ANY WAY TO YOUR USE OF THE SITE WILL BE GOVERNED AND INTERPRETED BY AND UNDER THE LAWS OF THE STATE OF DELAWARE, CONSISTENT WITH THE FEDERAL ARBITRATION ACT, WITHOUT GIVING EFFECT TO ANY PRINCIPLES THAT PROVIDE FOR THE APPLICATION OF THE LAW OF ANY OTHER JURISDICTION. THE UNITED NATIONS CONVENTION ON CONTRACTS FOR THE INTERNATIONAL SALE OF GOODS IS EXPRESSLY EXCLUDED FROM THIS AGREEMENT.</p>

    <h2>Privacy</h2>
    <p>Doable's policies concerning the information we collect about you, how we use it, and with whom we share are set forth in our <a href="https://alldoable.com/privacy" className="body-links">Privacy Policy</a>.</p>

    <h2>Third-Party Services</h2>
    <p><strong>Third-Party Websites, Applications & Ads:</strong> The Doable website may contain links to third-party websites (“Third-Party Websites”) and applications (“Third-Party Applications”) and advertisements for third parties (“Third-Party Ads”). When you click on a link to a Third-Party Website, Third-Party Application or Third-Party Ad, we may not warn you that you have left the Doable website and are subject to the terms and conditions (including privacy policies) of another website or destination. Such Third-Party Websites, Third-Party Applications and Third-Party Ads are not under the control of Doable. Doable is not responsible for any Third-Party Websites, Third-Party Applications or Third-Party Ads. Doable provides these Third-Party Websites, Third-Party Applications and Third-Party Ads only as a convenience and does not review, approve, monitor, endorse, warrant, or make any representations with respect to Third-Party Websites, Third-Party Applications or Third-Party Ads, or their products or services. You use all links in Third-Party Websites, Third-Party Applications and Third-Party Ads at your own risk. When you leave the Doable website, our Agreement and policies no longer govern. You should review applicable terms and policies, including privacy and data gathering practices, of any Third-Party Websites or Third-Party Applications, and should make whatever investigation you feel necessary or appropriate before proceeding with any transaction with any third party.</p>

    <p><strong>App Stores:</strong> You acknowledge and agree that the availability of the Doable Apps and the Services is dependent on the third party from whom you received the Doable Apps license, e.g., the Apple App Store or Google Play (“App Store”). You acknowledge that the Agreement is between you and Doable and not with the App Store. Doable, not the App Store, is solely responsible for the Doable website and Doable Services, including the Doable Apps, the content thereof, maintenance, support services, and warranty therefor, and addressing any claims relating thereto (e.g., product liability, legal compliance or intellectual property infringement). In order to use the Doable Apps, you must have access to a wireless network, and you agree to pay all fees associated with such access. You also agree to pay all fees (if any) charged by the App Store in connection with Doable website and Doable Services, including the Doable Apps. You agree to comply with, and your license to use the Doable Apps is conditioned upon your compliance with, all applicable third-party terms of agreement (e.g., the App Store's terms and policies) when using Doable website and Doable Services, including the Doable Apps. You acknowledge that the App Store (and its subsidiaries) are third-party beneficiaries of the Agreement and will have the right to enforce them.</p>

    <h2>Licenses and Intellectual Property</h2>
    <p><strong>Doable Apps License:</strong> Subject to your compliance with the Agreement, Doable grants you a limited non-exclusive, non-transferable, non-sublicensable, revocable license to download, install and use a copy of the Doable Apps on a single mobile device or computer that you own or control and to run such copy of the Doable Apps solely for your own personal purposes. Furthermore, with respect to any Doable Apps accessed through or downloaded from the Apple App Store (an “App Store Sourced Application”), you will only use the App Store Sourced Application (i) on an Apple-branded product that runs the iOS or tvOS (Apple's proprietary operating system) and (ii) as permitted by the “Usage Rules” set forth in the Apple App Store Terms of Service.</p>

    <h2>Governing Law</h2>
    <p>This Agreement shall be governed by the laws of the state of Delaware without regard to principles of conflicts of law, provided that this arbitration agreement shall be governed by the Federal Arbitration Act. The Uniform Commercial Code, the Uniform Computer Information Transaction Act, and the United Nations Convention of Controls for International Sale of Goods shall not apply.</p>

    <h2>General Terms</h2>
    <p>No Waiver: The failure of Doable to exercise or enforce any term of this Agreement will not constitute a waiver of such term.</p>

    <p>Provisions Severable: If any term of this Agreement is held invalid or unenforceable, that term will be construed in a manner consistent with applicable law to reflect, as nearly as possible, the original intentions of the parties, and the remaining terms will remain in full force and effect.</p>

    <p>Interpretation: Headings are provided for convenience and shall not be used to construe the terms hereof.</p>

    <p>Assignment: This Agreement is binding on the parties and their successors, heirs, and permitted assigns. This Agreement is not assignable or transferable by you without our prior written consent.</p>

    <p>Relationship: The parties are independent contractors as to one another. No agency, partnership, joint venture, employee-employer or franchiser-franchisee relationship is intended or created by this Agreement.</p>

    <p>No Third Parties: No third parties shall have any rights under this Agreement, except that indemnified parties may enforce indemnification rights.</p>

    <p>Force Majeure: Doable shall not be liable for any failure or delay in performance of its obligations under this Agreement arising out of or caused, directly or indirectly, by circumstances beyond its reasonable control, including, without limitation, acts of God; natural disasters; wars; civil or military disturbances; sabotage; strikes; epidemics; riots; power failures; computer failure; loss or malfunction of utility, transportation, computer (hardware or software) or telephone communication service; accidents; labor disputes, acts of civil or military authority; governmental actions; or inability to obtain labor, material, equipment or transportation.</p>

    <p>Contact Us: If you have any support questions, please contact us at <a href="mailto:support@Doable.com" className="body-links">hello@doablehq.com</a>.</p>

    <p>Effective: February 1, 2024</p>
          </div>
          </div>
      </section>
    </main>

  );
}
