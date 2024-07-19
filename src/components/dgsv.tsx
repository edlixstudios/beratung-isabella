import Image from "next/image";

export const Dgsv = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="italic">Mitglied des DGSV</p>
      <Image src={"/dgsv.png"} width={300} height={300} alt="DGSV Logo" />
    </div>
  );
};
