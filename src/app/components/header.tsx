import Image from "next/image";
import Link from "next/link";
import { NavigationLink } from "./navigationLink";

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
    },
    {
        name: "Über mich",
        href: "/about",
    },
    {
        name: "Impressum",
        href: "/impressum",
    },
];

// ddb319

export const Header = () => {
    return (
        <header className="flex flex-col items-center gap-2 p-4 ">
            <Image src={"/logo.jpeg"} width={250} height={250} alt={"Seiten Logo"} />
            <div className="text-center">
                <h1 className="text-2xl">Supervision - Coaching - Organisationsberatung</h1>
                <h2 className="text-sm text-black/75">Isabella Heilig</h2>
            </div>
            <ul className="flex gap-16 p-4 w-full justify-center">
                {navigationMenue.map((menueItem, index) => (
                    <li key={index}>
                        <NavigationLink {...menueItem} />
                    </li>
                ))}
            </ul>
        </header>
    );
};
