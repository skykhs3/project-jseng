import Image from "next/image";

interface MyEmployeeCardProps {
  name: string;
  position: string;
  subPosition: string;
  script: string[];
  imageSrc: string;
  objectPosition?: string;
}

export default function MyEmployeeCard({
  name,
  position,
  subPosition,
  script,
  imageSrc,
  objectPosition = "object-center",
}: MyEmployeeCardProps) {
  return (
    <div className="flex w-auto max-w-full flex-col items-center justify-start border border-gray-200 bg-white shadow-lg">
      <Image
        width={370}
        height={370}
        src={imageSrc}
        alt="임직원 이미지"
        className={`h-[300px] w-full object-cover md:h-[370px] ${objectPosition}`}
      />
      <div className="h-4"></div>
      <h3 className="text-xl font-semibold text-black">{name}</h3>
      <p className="text-lg text-[#09090b]">{position}</p>
      <p className="text-lg text-blue-500">{subPosition}</p>
      <ul className="w-72 max-w-[100%] list-outside break-keep p-4 pl-6 text-start text-base text-[#52525b]">
        {script.map((eachScript, idx) => (
          <li key={idx} className="list-hyphen">
            {idx == 0 && (
              <span className="font-medium text-black">{eachScript}</span>
            )}
            {idx != 0 && eachScript}
          </li>
        ))}
      </ul>
    </div>
  );
}
