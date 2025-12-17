import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import React from "react";

export default function Footer() {

  // ⭐ FIXED — added proper React event type
  const handlePlaceholder = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
  };

  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">

        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>

        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">

          {/* 1st block */}
          <FooterColumn
            title="Product"
            links={[
              "Features",
              "Integrations",
              "Pricing & Plans",
              "Changelog",
              "Our method",
              "User policy",
            ]}
            onClick={handlePlaceholder}
          />

          {/* 2nd block */}
          <FooterColumn
            title="Company"
            links={[
              "About us",
              "Diversity & Inclusion",
              "Blog",
              "Careers",
              "Financial statements",
            ]}
            onClick={handlePlaceholder}
          />

          {/* 3rd block */}
          <FooterColumn
            title="Resources"
            links={[
              "Community",
              "Terms of service",
              "Report a vulnerability",
            ]}
            onClick={handlePlaceholder}
          />

          {/* 4th block */}
          <FooterColumn
            title="Content Library"
            links={[
              "Templates",
              "Tutorials",
              "Knowledge base",
              "Learn",
              "Cookie manager",
            ]}
            onClick={handlePlaceholder}
          />

          {/* 5th block */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>

            <div className="text-sm">
              <p className="mb-3 text-indigo-200/65">
          
                <span className="text-gray-700"> · </span>

                <a
                  href="https://github.com/medgency3004-startup"
                  onClick={handlePlaceholder}
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                >
                  Terms and conditions applied.
                </a>
              </p>

              {/* Social icons */}
              <ul className="inline-flex gap-1">
                <SocialLink
                  href="https://github.com/medgency3004-startup"
                  aria="Twitter"
                  svgPath="m13.063 9 3.495..."
                />
                <SocialLink
                  href="https://medium.com/@medgency3004"
                  aria="Medium"
                  svgPath="M23 8H9a1..."
                />
                <SocialLink
                  href="https://github.com/medgency3004-startup"
                  aria="Github"
                  svgPath="M16 8.2c-4.4..."
                />
              </ul>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

// ⭐ FIXED — added proper typing for props
type FooterColumnProps = {
  title: string;
  links: string[];
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

function FooterColumn({ title, links, onClick }: FooterColumnProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-gray-200">{title}</h3>
      <ul className="space-y-2 text-sm">
        {links.map((text) => (
          <li key={text}>
            <a
              href="https://github.com/medgency3004-startup"
              onClick={onClick}
              className="text-indigo-200/65 transition hover:text-indigo-500"
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

type SocialLinkProps = {
  href: string;
  aria: string;
  svgPath: string;
};

function SocialLink({ href, aria, svgPath }: SocialLinkProps) {
  return (
    <li>
      <a
        className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
        href={href}
        aria-label={aria}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
          <path d={svgPath} />
        </svg>
      </a>
    </li>
  );
}
