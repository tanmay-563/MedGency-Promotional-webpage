import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import Link from "next/link";
import Image from "next/image";

import HeroImage from "@/public/images/hero-image-01.jpg";


export default function HeroHome() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        aria-hidden="true"
      ></div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Hero content */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="font-inter-tight mb-6 text-5xl font-extrabold text-slate-100 md:text-6xl"
              data-aos="fade-up"
            >
              Connecting Care in Critical Moments.
            </h1>

            <p
              className="mx-auto mb-8 max-w-3xl text-lg text-slate-400"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              MedGency is an intelligent emergency medical network that bridges
              the gap between clinics, hospitals, and donors — ensuring that
              life-saving resources reach where they're needed most, exactly
              when they're needed.
            </p>

            {/* Buttons */}
            <div
              className="mx-auto flex max-w-xs flex-col justify-center gap-4 sm:max-w-none sm:flex-row sm:items-center"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <Link
                href="https://github.com/medgency3004-startup"
                className="btn rounded-full bg-indigo-500 px-8 text-white shadow-sm hover:bg-indigo-600"
              >
                Support Us →
              </Link>

              <Link
                href="https://github.com/medgency3004-startup"
                className="btn rounded-full bg-slate-700 px-8 text-white shadow-sm hover:bg-slate-600"
              >
                Schedule Demo
              </Link>
            </div>
          </div>

          {/* Centered Video Thumbnail */}
          <div
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-delay={800}
          >
            <ModalVideo
              thumb={VideoThumb}
              thumbWidth={550}
              thumbHeight={500}
              thumbAlt="Modal video thumbnail"
              video="/videos/video.mp4"
              videoWidth={480}
              videoHeight={900}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
