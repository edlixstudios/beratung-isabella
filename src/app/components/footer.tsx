import { Address } from "./address";

export const Footer = () => {
    return (
        <footer className="bg-black text-white p-8 text-sm xl:text-base flex flex-col xl:flex-row xl:gap-8 xl:justify-around">
            © Copyright 2024 Supervision - Coaching - Organisationsberatung by Isabella Heilig
            <Address />
        </footer>
    );
};
