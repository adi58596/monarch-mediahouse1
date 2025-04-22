import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "5M+", label: "Views" },
  { value: "500+", label: "Videos" },
  { value: "10+", label: "Brands" },
  { value: "200%", label: "Traffic Growth" },
];

const Results = () => {
  useScrollAnimation();

  return (
    <section id="results" className="py-20 bg-gradient-to-br from-orange-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-on-scroll">
            Results That Speak
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-on-scroll hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
