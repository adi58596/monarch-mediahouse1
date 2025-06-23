import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  useScrollAnimation();

  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-on-scroll">
            We help brands create{" "}
            <span style={{ color: "#377453" }}>Intentional</span> and{" "}
            <span style={{ color: "#377453" }}>ROI driven</span> content
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-600 font-light animate-on-scroll word-spacing-wide"
            style={{ animationDelay: "0.2s" }}
          >
            Infotainment first creative agency that helps brands create content
            that resonates with your target audience and predictably drives more
            sales
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="hover-lift text-lg px-8 bg-[#FF7A1A] text-white hover:bg-[#377453] transition-colors duration-300"
              asChild
            >
              <a
                href="https://www.canva.com/design/DAGZcDmFDx4/YQTosCcjphK7ysx-hsni5A/view?utm_content=DAGZcDmFDx4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5cd428a90e"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Our Portfolio
              </a>
            </Button>


            <Button variant="outline" size="lg" className="hover-lift text-lg px-8" asChild>
            <a
                href="https://calendly.com/adii_/let-s-catch-up"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
