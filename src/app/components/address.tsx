import { PhoneIcon } from "lucide-react";

export const Address = () => {
    return (
        <address>
            <h2 className=" font-bold mb-4 flex items-center gap-4 mt-8 xl:text-4xl xl:mt-0 ">
                Impressum <PhoneIcon />
            </h2>
            <h3 className="text-[var(--primary-color)]  font-bold xl:text-3xl ">Isabella Heilig</h3>
            <h4>
                <span>Tel:</span>
                <a href="tel:+4917634401219">0176 / 34401219</a>
            </h4>
            <h4>
                <span>Mail:</span>
                <a href="mailto:info@beratung-isabella-heilig.de">
                    info@beratung-isabella-heilig.de
                </a>
            </h4>
        </address>
    );
};
