import { ReactNode } from "react";

export const PageLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="container leading-relaxed flex-grow mx-auto xl:px-64 px-8">
            {children}
        </main>
    );
};
