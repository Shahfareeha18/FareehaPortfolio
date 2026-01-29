"use client";

import { useState } from "react";
import Image from "next/image";

const galleryImages: string[] = [
  "/work/lead_inspection.png",
  "/work/arod_crm.png",
  "/work/properties_saler.png",
  "/work/case_management.png",
  "/work/tilismi.PNG",
];

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentImg, setCurrentImg] = useState<number>(0);

  const openGallery = (index: number): void => {
    setCurrentImg(index);
    setIsOpen(true);
  };

  const closeGallery = (): void => setIsOpen(false);

  const nextImage = (): void => {
    setCurrentImg((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (): void => {
    setCurrentImg(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <div className="relative pt-24 pb-14 text-center">
      <h1 className="font-heading text-white text-4xl sm:text-5xl md:text-7xl font-bold max-w-4xl mx-auto mb-6">
        I Build Scalable Web Applications with Laravel & Next.js
      </h1>

      <p className="text-white text-lg max-w-xl mx-auto mb-12">
        4+ years experience creating eCommerce, CRM, and custom web solutions.
      </p>

      {/* Cropped Image */}
      <div
        className="mx-auto w-full max-w-3xl cursor-pointer overflow-hidden rounded-xl"
        onClick={() => openGallery(0)}
      >
        <Image
          src={galleryImages[0]}
          alt="Portfolio preview"
          width={800}
          height={400}
          className="object-cover w-full h-80 hover:scale-105 transition-transform duration-300"
        />
      </div>

      <p className="text-white mt-4">Click image to see more works</p>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={closeGallery}
          >
            ×
          </button>

          <button
            className="absolute left-4 text-white text-3xl font-bold"
            onClick={prevImage}
          >
            ‹
          </button>

          <div className="relative max-w-4xl max-h-[80vh] mx-auto">
            <Image
              src={galleryImages[currentImg]}
              alt={`Portfolio image ${currentImg + 1}`}
              width={1200}
              height={600}
              className="object-contain w-full h-auto rounded-xl"
            />
          </div>

          <button
            className="absolute right-4 text-white text-3xl font-bold"
            onClick={nextImage}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
