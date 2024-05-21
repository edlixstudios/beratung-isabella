"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

type NavigationLinkProps = {
    href: string;
    name: string;
};

export const NavigationLink = ({ href, name }: NavigationLinkProps) => {
    const pathName = usePathname();

    return (
        <Link className={twMerge(pathName === href && "text-[#e8b81d]")} href={href}>
            {name}
        </Link>
    );
};
