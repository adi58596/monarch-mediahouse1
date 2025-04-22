
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Stand Out?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's create something extraordinary together
          </p>
          <Button size="lg" className="text-lg px-8" asChild>
            <a href="mailto:contact@monarchmedia.com">Get Started</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
