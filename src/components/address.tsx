import { PhoneIcon } from "lucide-react";

export const Address = () => {
  return (
    <div className="w-fit relative left-1/2 -translate-x-1/2 ">
      <h3 className="font-bold text-xl">Isabella Heilig</h3>
      <h4>
        <span>Tel: </span>
        <a href="tel:+4917634401219">0173 9968129</a>
      </h4>
      <h4>
        <span>Mail: </span>
        <a href="mailto:info@beratung-isabella-heilig.de">
          beratung.heilig@cloudmail.de
        </a>
      </h4>
    </div>
  );
};
