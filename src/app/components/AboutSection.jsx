"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Why Choose Us",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Extensive Product Range</li>
        <li>Quality Assurance</li>
        <li>Exceptional Service</li>
        <li>Exceptional Service</li>
        <li>Reliable Customer Support</li>
        <li>Commitment to Sustainability</li>
      </ul>
    ),
  },
  {
    title: "Mission Statement",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>our mission is to empower our customers with high-quality electrical, mechanical, and hardware solutions that drive innovation, efficiency, and success</li>
        <li>We are committed to delivering exceptional value, unparalleled service, and sustainable solutions that make a positive impact on our customers, employees, and communities</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li> Over the years, we have achieved significant milestones, including expanding our product offerings, opening multiple locations nationwide, and earning recognition for our commitment to excellence and customer satisfaction.</li>
        
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-black" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/a3.jpg" width={500} height={500} alt='' />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-black mb-4">About Us</h2>
          <p className="text-base lg:text-lg">
          Aiva. specializes in providing a comprehensive range of electrical items, mechanical items,
           and hardware materials to businesses and individuals. With a commitment to quality, affordability, 
           and customer satisfaction, we aim to be your trusted partner for all your supply needs
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Why Choose Us{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Mission Statement{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Milestones{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
