import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FeatureSection from "../components/FeatureSection";
import imgMainHeader from "../assets/main-header.png";
import Button from "../components/btn.jsx";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

     
      <section className="bg-gradient-to-r from-green-100 to-green-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">

          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-6xl font-bold text-green-900 leading-tight">
              Fresh Vegetables <br />
              Directly From Farm 
            </h1>

            <p className="text-gray-700 text-lg md:text-xl">
              From farm to your doorstep, we ensure quality, freshness,
              and affordable prices every single day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                title="Call Us"
                variant="secondary"
                size="medium"
              />
              <Button
                title="Explore Now"
                onClick={() => navigate("/Vegitable")}
                variant="primary"
                size="medium"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={imgMainHeader}
              alt="Fresh Vegetables"
              className="w-[300px] md:w-[500px] drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="bg-white py-10">
        <h2 className="text-2xl md:text-4xl font-semibold text-center text-gray-800">
          Taaza sabzi har din,
          <br />
          healthy zindagi ke liye.
        </h2>
      </section>

      {/* Features */}
      <section className="bg-green-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <FeatureSection />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
