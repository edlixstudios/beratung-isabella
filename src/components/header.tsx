"use client";

import Image from "next/image";
import { NavigationLink } from "./navigationLink";
import { MenuIcon, XIcon } from "lucide-react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useDocument } from "$/hooks/useDocument";

const navigationMenue = [
  {
    name: "Startseite",
    href: "/",
  },
  {
    name: "Supervision",
    href: "/supervision",
  },
  {
    name: "Coaching",
    href: "/coaching",
  },  {
    name: "Organisationsberatung",
    href: "/organisationsberatung",
  }
  {
    name: "Über mich",
    href: "/about",
  },
  {
    name: "Kontakt",
    href: "/contact",
  }, 
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const document = useDocument();

  return (
    <header className="flex flex-col items-center gap-2 p-4 relative">
      <Image src={"/logo.jpeg"} width={250} height={250} alt={"Seiten Logo"} />
      <div className="text-center">
        <h1 className="text-2xl">
          Supervision - Coaching - Organisationsberatung
        </h1>
        <h2 className="text-sm text-black/75">Isabella Heilig</h2>
      </div>
      <div className="absolute left-0 top-0 md:hidden">
        <button
          className="relative top-3 left-3 hover:bg-black/25 p-1"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </button>
        <motion.div
          transition={{
            ease: "linear",
          }}
          initial={{ x: -500 }}
          animate={
            !open
              ? {
                  x:
                    document.current && document.current.innerWidth
                      ? -document.current.innerWidth
                      : -500,
                }
              : { x: 0 }
          }
          className="bg-white absolute top-0 w-screen h-screen "
        >
          <div className="mb-4">
            <button
              className="relative top-3 left-3  hover:bg-black/25 p-1"
              onClick={() => setOpen(false)}
            >
              <XIcon />
            </button>
          </div>

          <ul className="flex flex-col gap-4 p-4 w-full text-center ">
            {navigationMenue.map((menueItem, index) => (
              <li key={`${index}-small`} onClick={() => setOpen(false)}>
                <NavigationLink {...menueItem} />
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      <ul className="gap-16 p-4 w-full justify-center hidden md:flex">
        {navigationMenue.map((menueItem, index) => (
          <li key={`${index}-big`}>
            <NavigationLink {...menueItem} />
          </li>
        ))}
      </ul>
    </header>
  );
};
