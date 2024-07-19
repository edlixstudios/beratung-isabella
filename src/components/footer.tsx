import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 text-sm xl:text-base flex flex-col xl:flex-row xl:gap-8 xl:justify-around">
      <section>
        © Copyright 2024 Supervision - Coaching - Organisationsberatung by
        Isabella Heilig
      </section>
      <section className="flex flex-col gap-2">
        <Link href={"impressum"}>Impressum</Link>
        <Link href={"/policy"}>Datenschutzverordnung</Link>
      </section>
      {/* <Address /> */}
    </footer>
  );
};
