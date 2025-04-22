import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    title: "Brand Consultation",
    description: "Strategic guidance to define and enhance your brand identity"
  },
  {
    title: "Brand Strategy",
    description: "Comprehensive planning for sustainable brand growth"
  },
  {
    title: "Social Media Management",
    description: "End-to-end social media presence management and growth"
  },
  {
    title: "Video Editing",
    description: "Professional video content creation and editing services"
  },
  {
    title: "Performance Marketing",
    description: "Data-driven marketing campaigns for measurable results"
  }
];

const Services = () => {
  useScrollAnimation();

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-on-scroll">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover-lift animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 font-light">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
