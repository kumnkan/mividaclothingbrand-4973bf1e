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
      answer: "We offer nationwide delivery within 3-5 business days across South Africa. Once your order is dispatched, you'll receive a tracking number via email to monitor your parcel's progress.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit and debit cards through our secure payment gateway. Payments are processed instantly and your order is confirmed immediately.",
    },
    {
      question: "Can I cancel my order?",
      answer: "You have 24 hours from the time of purchase to cancel your order. Please contact our support team immediately within this timeframe to process your cancellation. After 24 hours, your order will be prepared for dispatch and cannot be cancelled.",
    },
    {
      question: "What is your warranty policy?",
      answer: "All MI VIDA products come with a 7-day warranty from the date of delivery. If you experience any manufacturing defects or quality issues within this period, please contact our support team with photos of the defect, and we will provide a replacement or refund.",
    },
    {
      question: "How do I care for my MI VIDA products?",
      answer: "Hand wash only in cold water with mild detergent. Do not bleach or dry clean. Air dry flat away from direct sunlight. Iron on low heat if needed. Following these care instructions will help maintain the quality and longevity of your garment.",
    },
    {
      question: "Are your products made in South Africa?",
      answer: "Yes, MI VIDA is a proudly South African brand. All our products are designed and manufactured in South Africa, supporting local industry and ensuring quality craftsmanship.",
    },
    {
      question: "How do I track my order?",
      answer: "Once your order is dispatched, you'll receive a tracking number via email. You can enter this number on our Track Order page to see real-time updates on your delivery status.",
    },
    {
      question: "What sizes do you offer?",
      answer: "We offer a comprehensive range of sizes: T-Shirts and Hoodies (XS to XXXL), and Socks (SA shoe sizes 1-3, 4-6, 7-9, 10-12). Check our size guide on each product page for detailed measurements.",
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
                <AccordionContent className="text-muted-foreground">
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
