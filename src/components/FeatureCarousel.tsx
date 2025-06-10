import React from "react";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

interface Feature {
  title: string;
  description: string;
  image: string;
  link: string;
}

const features: Feature[] = [
  {
    title: "Services We Offer",
    description: "Explore our IT training, software consulting, DevOps, and cloud services.",
    image: require("../images/services-we-offer.png"),
    link: "/services",
  },
  {
    title: "Why Choose Us",
    description: "Discover why CanTech is the go-to partner for growing IT teams.",
    image: require("../images/why-us.png"),
    link: "/why-us",
  },
  {
    title: "Corporate Training",
    description: "Custom-tailored tech training for businesses worldwide.",
    image: require("../images/corporate-training.png"),
    link: "/training",
  },
];

const FeatureCarousel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              onClick={() => navigate(feature.link)}
              data-aos="zoom-in"
              className="cursor-pointer transform hover:scale-105 hover:shadow-xl transition duration-500 rounded-lg overflow-hidden bg-white shadow-md group relative"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold group-hover:scale-110 transform">
                  Click to Explore
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCarousel;