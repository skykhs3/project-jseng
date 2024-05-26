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
    <div className="m-2 mb-4 flex w-auto max-w-full flex-col items-center justify-start rounded-lg border border-gray-200 bg-white p-4 shadow-md">
      <Image
        width={72}
        height={100}
        src={imageSrc}
        alt="임직원 이미지"
        className="w-72 rounded-md"
      />
      <div className="h-4"></div>
      <h3 className="text-lg font-semibold text-black">{name}</h3>
      <p className="text-base text-[#09090b]">{position}</p>
      <p className="text-sm text-[#09090b]">{subPosition}</p>
      <div className="h-4"></div>
      <ul className="w-72  max-w-[100%] text-sm text-[#52525b]">
        {script.map((s, idx) => (
          <li key={idx}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
