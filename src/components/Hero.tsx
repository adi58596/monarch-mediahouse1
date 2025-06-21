import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const Hero = () => {
  useScrollAnimation();
  return <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-on-scroll">
            We help brands create <span className="text-gradient">Intentional</span> and <span className="text-gradient">ROI driven</span> content
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light animate-on-scroll" style={{
          animationDelay: '0.2s'
        }}>Infotainment first creative agency that helps brands create content that resonates with your target audience and predictably drives more sales</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll" style={{
          animationDelay: '0.4s'
        }}>
            <Button size="lg" className="hover-lift text-lg px-8" asChild>
              <a href="#contact">Start Your Project</a>
            </Button>
            <Button variant="outline" size="lg" className="hover-lift text-lg px-8" asChild>
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;