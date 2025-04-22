
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-up">
            not just <span className="text-gradient">grey</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 animate-slide-up" style={{animationDelay: '0.2s'}}>
            We explore emotion, contrast, contradiction — a bold spectrum for your brand's social media presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Button size="lg" asChild>
              <a href="#contact">Start Your Project</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
