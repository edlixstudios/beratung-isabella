import { ReactNode } from "react";

export const ContentWrapper = ({ children }: { children: ReactNode }) => {
    return <div className="text-justify my-8">{children}</div>;
};
