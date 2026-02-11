import React from "react";
import IconFresh from "../assets/fresh.svg";
import IconQuality from "../assets/high-quality.svg";
import IconSatisfaction from "../assets/satisfaction.svg";

const FEATURES_CONFIG = [
  {
    title: "Farm Fresh Everyday",
    description:
      "We partner with local farmers to bring naturally grown vegetables straight to your kitchen.",
    img: IconFresh,
  },
  {
    title: "Premium Quality",
    description:
      "Every vegetable is handpicked and quality-checked before it reaches you.",
    img: IconQuality,
  },
  {
    title: "Happy Customers",
    description:
      "Fast delivery, easy returns, and dedicated support for a seamless shopping experience.",
    img: IconSatisfaction,
  },
];

function FeatureCard({ title, description, img }) {
  return (
    <div className="group bg-white/70 backdrop-blur-md border border-white/40 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center max-w-sm">

      {/* Icon Circle */}
      <div className="bg-emerald-100 p-5 rounded-full mb-5 group-hover:bg-emerald-200 transition">
        <img src={img} alt={title} className="h-14 w-14 object-contain" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function FeatureSection() {
  return (
    <section className="bg-gradient-to-r from-emerald-50 to-green-100 py-16 px-6">

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Why Choose VeggieHub?
        </h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          We make healthy living simple by delivering farm-fresh vegetables
          with unmatched quality and service.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 place-items-center">
        {FEATURES_CONFIG.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

    </section>
  );
}

export default FeatureSection;
