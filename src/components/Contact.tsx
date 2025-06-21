
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  useScrollAnimation();
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">Ready to Stand Out?</h2>
          <p className="text-xl text-gray-600 mb-8 font-light animate-on-scroll" style={{
            animationDelay: '0.2s'
          }}>
            Let's create something extraordinary together
          </p>
          <Button size="lg" className="text-lg px-8 hover-lift animate-on-scroll" style={{
            animationDelay: '0.4s'
          }} asChild>
            <a href="https://calendly.com/your-booking-link" target="_blank" rel="noopener noreferrer">
              Book a call
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
