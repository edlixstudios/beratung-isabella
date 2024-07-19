import { ReactNode } from "react";

export const Listing = ({children}:{children:ReactNode}) => {

    return          <ul className="py-4 px-8 text-left">
{children}
    </ul>
}