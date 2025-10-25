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
      answer: "We offer nationwide delivery within 3-5 business days. Once your order is dispatched, you'll receive a tracking number via email to monitor your parcel's progress.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit and debit cards through our secure payment gateway. Payments are processed instantly and your order is confirmed immediately.",
    },
    {
      question: "What is your return policy?",
      answer: "We offer easy returns within 30 days of purchase. Items must be unworn, unwashed, and in original condition with tags attached. Contact our support team to initiate a return.",
    },
    {
      question: "How do I track my order?",
      answer: "Once your order is dispatched, you'll receive a tracking number via email. You can enter this number on our Track Order page to see real-time updates on your delivery status.",
    },
    {
      question: "What sizes do you offer?",
      answer: "We offer a comprehensive range of sizes: Adults (XS to XXXL), Kids (4Y to 14Y), and Socks (SA shoe sizes 3-14). Check our size guide on each product page for detailed measurements.",
    },
    {
      question: "Are your products made in South Africa?",
      answer: "Mi Rita is a proudly South African brand. We carefully source our materials and work with local partners to bring you quality products.",
    },
    {
      question: "How do I care for my Mi Rita products?",
      answer: "Machine wash cold with similar colors. Tumble dry low or hang to dry. Iron on low heat if needed. Avoid bleach to maintain fabric quality and color.",
    },
    {
      question: "Can I change or cancel my order?",
      answer: "Orders can be modified or cancelled within 2 hours of placement. After that, your order will be processed for dispatch. Contact us immediately if you need to make changes.",
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
            Find answers to common questions about Mi Rita products, orders, and policies.
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
              href="mailto:support@mirita.co.za"
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
