import React from "react";
import NavBar from "../components/NavBar";
import SliderHero from "../components/SliderHero";
import ValueCard from "../components/ValueCard";
import fav1 from "../assets/fav1.svg";
import fav2 from "../assets/fav2.svg";
import fav3 from "../assets/fav3.svg";

export default function Home() {
  return (
    <>
      <div className="">
        <NavBar />
      </div>
      <div className="">
        <SliderHero />

        <section className="bg-[#FFFFFF]">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-[20px] md:px-[50px] gap-5 lg:gap-8 md:py-14 py-5 m-auto">
            <ValueCard
              icon={fav1}
              bg={"#3B2F2A"}
              title="Excellence"
              content="Driven by Excellence: Setting the Benchmark for Quality in Cocoa Warehousing and Distribution."
            />

            <ValueCard
              icon={fav1}
              bg={"#808080"}
              title="Advanced Quality Control"
              content="Strict quality assurance processes to ensure only the finest cocoa meets global standards.."
            />
            <ValueCard
              icon={fav1}
              bg={"#3B2F2A"}
              title="Sustainable Practice"
              content="Commitment to environmentally friendly operations and support for sustainable farming practices.."
            />
          </div>
        </section>
      </div>
    </>
  );
}
