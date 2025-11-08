import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does delivery take?",
      answer: "• Nationwide delivery within 3-5 business days across South Africa\n• Tracking number sent via email once order is dispatched\n• Real-time delivery updates available on our Track Order page",
    },
    {
      question: "What payment methods do you accept?",
      answer: "• All major credit and debit cards accepted\n• Secure payment gateway for safe transactions\n• Instant payment processing and order confirmation",
    },
    {
      question: "Can I cancel my order?",
      answer: "• 24-hour cancellation window from time of purchase\n• Contact support immediately within this timeframe\n• Orders cannot be cancelled after 24 hours as they enter dispatch preparation",
    },
    {
      question: "What is your warranty policy?",
      answer: "• 7-day warranty from date of delivery\n• Covers manufacturing defects and quality issues\n• Contact support with photos of any defects for replacement or refund",
    },
    {
      question: "How do I care for my MI VIDA products?",
      answer: "• Hand wash only in cold water with mild detergent\n• Do not bleach or dry clean\n• Air dry flat away from direct sunlight\n• Iron on low heat if needed",
    },
    {
      question: "Are your products made in South Africa?",
      answer: "• Proudly South African brand\n• All products designed and manufactured in South Africa\n• Supports local industry and ensures quality craftsmanship",
    },
    {
      question: "How do I track my order?",
      answer: "• Tracking number sent via email after dispatch\n• Enter tracking number on our Track Order page\n• Monitor real-time delivery status and updates",
    },
    {
      question: "What sizes do you offer?",
      answer: "• T-Shirts & Hoodies: XS, S, M, L, XL, XXL, XXXL\n• Socks: SA shoe sizes 1-3, 4-6, 7-9, 10-12\n• Size guide available on each product page",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Find answers to common questions about MI VIDA products, orders, and policies.
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border px-6 bg-card">
                <AccordionTrigger className="text-left font-bold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 p-6 bg-secondary border border-border">
            <h2 className="text-xl font-bold mb-2">Still have questions?</h2>
            <p className="text-muted-foreground mb-4">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <a
              href="mailto:support@mivida.co.za"
              className="text-primary font-medium hover:underline"
            >
              Contact Support →
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;
