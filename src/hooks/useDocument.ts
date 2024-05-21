import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const useDocument = () => {
    const documentRef = useRef<Window | null>(null);

    useEffect(() => {
        if (typeof document !== "undefined") documentRef.current = window;
    }, []);

    return documentRef;
};
