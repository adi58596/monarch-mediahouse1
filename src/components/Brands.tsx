import React from "react";

const brandLogos = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png",
  "/5.png",
  "/6.png",
];

const Brands = () => (
  <section id="brands" className="pt-12 pb-20">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 animate-on-scroll">Brands Who Trust Us</h2>
      <div
        className="overflow-hidden group"
        style={{ position: 'relative' }}
      >
        <div
          className="flex items-center gap-12 animate-marquee group-hover:[animation-play-state:paused]"
          style={{ willChange: 'transform' }}
        >
          {brandLogos.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={`Brand logo ${idx + 1}`}
              className={
                `object-contain grayscale hover:grayscale-0 transition duration-300 ` +
                (idx === 4 || idx === 5
                  ? 'h-8 md:h-10 w-auto'
                  : 'h-12 md:h-16 w-auto')
              }
              loading="lazy"
            />
          ))}
          {/* Duplicate for seamless marquee */}
          {brandLogos.map((src, idx) => (
            <img
              key={src + '-dup'}
              src={src}
              alt={`Brand logo ${idx + 1}`}
              className={
                `object-contain grayscale hover:grayscale-0 transition duration-300 ` +
                (idx === 4 || idx === 5
                  ? 'h-8 md:h-10 w-auto'
                  : 'h-12 md:h-16 w-auto')
              }
              loading="lazy"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
    <style>
      {`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 8s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}
    </style>
  </section>
);

export default Brands; 