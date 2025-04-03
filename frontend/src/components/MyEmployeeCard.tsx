"use client";

import React from "react";
import Image from "next/image";

interface MyEmployeeCardProps {
  name: string;
  position: string;
  subPosition: string;
  qualifications: string[];
  image: string;
}

const MyEmployeeCard: React.FC<MyEmployeeCardProps> = ({
  name,
  position,
  subPosition,
  qualifications,
  image,
}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-4 shadow-md">
      <div className="relative h-40 w-40 overflow-hidden rounded-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold text-[#09090b]">{name}</h3>
        <p className="text-lg text-[#52525b]">{position}</p>
        <p className="text-sm text-[#71717a]">{subPosition}</p>
        <ul className="mt-2 list-inside list-disc text-start text-sm text-[#71717a]">
          {qualifications.map((qualification, index) => (
            <li key={index}>{qualification}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyEmployeeCard;
