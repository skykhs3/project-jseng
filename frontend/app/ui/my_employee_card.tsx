import Image from "next/image";

interface MyEmployeeCardProps {
  name: string;
  position: string;
  subPosition: string;
  script: string[];
  imageSrc: string;
}

export default function MyEmployeeCard({
  name,
  position,
  subPosition,
  script,
  imageSrc,
}: MyEmployeeCardProps) {
  return (
    <div className="flex w-auto max-w-full flex-col items-center justify-start border border-gray-200 bg-white shadow-lg">
      <Image
        width={370}
        height={370}
        src={imageSrc}
        alt="임직원 이미지"
        className="h-[300px] w-full object-cover object-top md:h-[370px]"
      />
      <div className="h-4"></div>
      <h3 className="text-xl font-semibold text-black">{name}</h3>
      <p className="text-lg text-[#09090b]">{position}</p>
      <p className="text-lg text-[#09090b]">{subPosition}</p>
      <ul className="text-md w-72 max-w-[100%] p-4 text-start text-[#52525b]">
        {script.map((s, idx) => (
          <li key={idx}>- {s}</li>
        ))}
      </ul>
    </div>
  );
}
