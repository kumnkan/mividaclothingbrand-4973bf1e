import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8 text-foreground">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-3">
                These Terms and Conditions ("Terms") govern your use of MI VIDA's website and purchase of products. By accessing our website or making a purchase, you agree to be bound by these Terms and all applicable South African laws and regulations.
              </p>
              <p className="text-muted-foreground">
                MI VIDA is a registered business operating in the Republic of South Africa and complies with all relevant South African legislation including the Consumer Protection Act, 68 of 2008 (CPA) and the Protection of Personal Information Act, 4 of 2013 (POPIA).
              </p>
            </section>

            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-bold mb-4">2. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-2">
                By placing an order with MI VIDA, you acknowledge that you have read, understood, and agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>All terms and conditions outlined in this document</li>
                <li>Our Privacy Policy and data processing practices</li>
                <li>Our return, refund, and warranty policies</li>
                <li>Receive marketing communications via email and SMS (optional)</li>
              </ul>
            </section>

            {/* Consumer Protection Act Compliance */}
            <section>
              <h2 className="text-2xl font-bold mb-4">3. Consumer Protection Act (CPA) Compliance</h2>
              <p className="text-muted-foreground mb-2">
                In accordance with the Consumer Protection Act, 68 of 2008:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>You have the right to receive goods that are reasonably suitable for the intended purpose</li>
                <li>You have the right to cancel your order within 24 hours of purchase</li>
                <li>All products come with a 7-day warranty for manufacturing defects</li>
                <li>We provide clear pricing, product descriptions, and delivery timelines</li>
                <li>You have the right to fair and honest dealing</li>
                <li>You may approach the Consumer Tribunal or Ombudsman for dispute resolution</li>
              </ul>
            </section>

            {/* POPIA Compliance */}
            <section>
              <h2 className="text-2xl font-bold mb-4">4. Protection of Personal Information (POPIA)</h2>
              <p className="text-muted-foreground mb-2">
                MI VIDA is committed to protecting your personal information in accordance with POPIA:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>We collect only necessary personal information for order processing and delivery</li>
                <li>Your information is stored securely and never sold to third parties</li>
                <li>You have the right to access, correct, or delete your personal information</li>
                <li>We process your data lawfully and with your consent</li>
                <li>Personal information is retained only for as long as necessary</li>
                <li>You may withdraw consent for marketing communications at any time</li>
              </ul>
            </section>

            {/* Marketing Communications */}
            <section>
              <h2 className="text-2xl font-bold mb-4">5. Marketing Communications Consent</h2>
              <p className="text-muted-foreground mb-2">
                By accepting these terms, you consent to receive:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Promotional emails about new products, sales, and special offers</li>
                <li>SMS notifications about exclusive deals and limited-time promotions</li>
                <li>Order updates and delivery notifications</li>
                <li>Customer satisfaction surveys and feedback requests</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                You may opt-out of marketing communications at any time by clicking "unsubscribe" in our emails, replying "STOP" to SMS messages, or contacting support@mivida.co.za.
              </p>
            </section>

            {/* Product Information */}
            <section>
              <h2 className="text-2xl font-bold mb-4">6. Product Information and Availability</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>All products are designed and manufactured in South Africa</li>
                <li>Product colors may vary slightly due to screen display settings</li>
                <li>We reserve the right to modify product specifications without notice</li>
                <li>Product availability is subject to stock levels</li>
                <li>Prices are subject to change without notice</li>
              </ul>
            </section>

            {/* Payment Terms */}
            <section>
              <h2 className="text-2xl font-bold mb-4">7. Payment Terms</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>All prices are in South African Rand (ZAR) and include VAT</li>
                <li>Payment must be received before order dispatch</li>
                <li>We accept all major credit and debit cards</li>
                <li>Payment is processed through secure, encrypted gateways</li>
                <li>Failed payments may result in order cancellation</li>
              </ul>
            </section>

            {/* Delivery Terms */}
            <section>
              <h2 className="text-2xl font-bold mb-4">8. Delivery and Shipping</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Delivery within 3-5 business days across South Africa</li>
                <li>Delivery times are estimates and not guaranteed</li>
                <li>Risk of loss passes to customer upon delivery</li>
                <li>Customer must inspect goods upon delivery and report damages within 48 hours</li>
                <li>Delivery address cannot be changed after dispatch</li>
              </ul>
            </section>

            {/* Cancellation and Returns */}
            <section>
              <h2 className="text-2xl font-bold mb-4">9. Cancellation and Returns</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Orders may be cancelled within 24 hours of purchase</li>
                <li>Cancellation requests must be submitted via email to support@mivida.co.za</li>
                <li>Refunds processed within 7-10 business days to original payment method</li>
                <li>Products must be unused and in original packaging for returns</li>
                <li>Customer bears the cost of return shipping unless product is defective</li>
              </ul>
            </section>

            {/* Warranty */}
            <section>
              <h2 className="text-2xl font-bold mb-4">10. Warranty</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>7-day warranty from date of delivery covers manufacturing defects only</li>
                <li>Warranty does not cover damage from misuse, washing errors, or normal wear</li>
                <li>Warranty claims require photographic evidence and order reference</li>
                <li>Approved warranty claims result in replacement or refund at MI VIDA's discretion</li>
              </ul>
            </section>

            {/* Care Instructions */}
            <section>
              <h2 className="text-2xl font-bold mb-4">11. Product Care Requirements</h2>
              <p className="text-muted-foreground mb-2">
                Customers must follow care instructions to maintain warranty validity:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Hand wash only in cold water with mild detergent</li>
                <li>Do not bleach, dry clean, or machine wash</li>
                <li>Air dry flat away from direct sunlight</li>
                <li>Iron on low heat if necessary</li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold mb-4">12. Limitation of Liability</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>MI VIDA's liability is limited to the purchase price of the product</li>
                <li>We are not liable for indirect, consequential, or incidental damages</li>
                <li>We are not liable for delivery delays caused by courier services</li>
                <li>Limitation does not affect your statutory rights under South African law</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold mb-4">13. Intellectual Property</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>All MI VIDA designs, logos, and content are protected by copyright</li>
                <li>Unauthorized reproduction or distribution is prohibited</li>
                <li>Product designs remain the intellectual property of MI VIDA</li>
              </ul>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold mb-4">14. Governing Law and Jurisdiction</h2>
              <p className="text-muted-foreground mb-2">
                These Terms are governed by the laws of the Republic of South Africa:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>All disputes subject to South African law and jurisdiction</li>
                <li>Any legal proceedings shall be instituted in South African courts</li>
                <li>Terms comply with Consumer Protection Act and POPIA</li>
              </ul>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold mb-4">15. Changes to Terms</h2>
              <p className="text-muted-foreground">
                MI VIDA reserves the right to modify these Terms at any time. Changes become effective immediately upon posting. Continued use of our website after changes constitutes acceptance of modified Terms.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold mb-4">16. Contact Information</h2>
              <p className="text-muted-foreground mb-2">
                For questions about these Terms and Conditions:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground ml-4">
                <li>Email: support@mivida.co.za</li>
                <li>Subject: Terms and Conditions Inquiry</li>
              </ul>
            </section>

            {/* Acceptance Statement */}
            <section className="border-t border-border pt-8 mt-8">
              <div className="bg-secondary p-6 border border-border">
                <h3 className="text-lg font-bold mb-3">Acceptance Declaration</h3>
                <p className="text-muted-foreground">
                  By completing your purchase, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions, including consent to receive marketing communications via email and SMS. You acknowledge your rights under South African consumer protection laws and MI VIDA's commitment to POPIA compliance.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
