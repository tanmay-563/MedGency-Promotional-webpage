"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";

const testimonials = [
  {
    content:
      "Trying to connect different blood banks with hospitals as well as different other blood banks in need of blood supplies during emergencies. MedGency aims to streamline this process by providing a unified platform for real-time inventory management, urgent request handling, and optimized delivery routes, ensuring that life-saving blood units reach patients without delay.",
    categories: [1, 3],
  },
  {
    content:
      "We are trying to connect hospitals and clinics in need of urgent medical supplies in emergency with our platform as fast as possible. MedGency will provide real-time tracking, proof-of-delivery, and automated documentation to ensure every critical shipment reaches its destination on time and intact.",
    categories: [1, 2],
  },
  {
    content:
      "Providing 24/7 support from our end to the user and guiding them through the process. With a chatbot integrated into the platform, users can get instant answers to common questions, track their requests, and receive updates on delivery status without waiting on hold. It will provide better support in case of emergencies.",
    categories: [1, 4],
  },
  {
    content:
      "Any other medical emergencies like booking beds, transferring patients, or providing additional emergency services will be handled. Many more services will be added in the future based on real-world requirements.",
    categories: [1, 5],
  },
];

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Who We’re Building MedGency For
          </h2>
          <p className="text-lg text-indigo-200/65">
            We’re designing MedGency for the people who fight for every second in
            a medical emergency — doctors, nurses, coordinators, and responders
            who need life-saving resources to move faster, safer, and smarter.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center pb-12 max-md:hidden md:pb-16">
          <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-gray-800/40 p-1">
            {[1, 2, 3, 4, 5].map((id) => (
              <button
                key={id}
                aria-pressed={category === id}
                onClick={() => setCategory(id)}
                className={`flex h-8 items-center whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${
                  category === id
                    ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900"
                    : "opacity-65 hover:opacity-90"
                }`}
              >
                {id === 1 && "View All"}
                {id === 2 && "Hospitals & Clinics"}
                {id === 3 && "Blood Banks"}
                {id === 4 && "24×7 Support"}
                {id === 5 && "Emergency Services"}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div
          ref={masonryContainer}
          className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <Testimonial testimonial={testimonial} category={category}>
                {testimonial.content}
              </Testimonial>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Testimonial({
  testimonial,
  category,
  children,
}: {
  testimonial: {
    content: string;
    categories: number[];
  };
  category: number;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity ${
        !testimonial.categories.includes(category) ? "opacity-30" : ""
      }`}
    >
      <p className="text-indigo-200/65 before:content-['“'] after:content-['”']">
        {children}
      </p>
    </article>
  );
}
