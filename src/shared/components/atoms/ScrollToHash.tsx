import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToHash() {
    const pathname = usePathname();

    useEffect(() => {
        const hash = window.location.hash;

        if (!hash) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
            setTimeout(() => {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 0);
        }
    }, [pathname]);

    useEffect(() => {
        const onHashChange = () => {
            const hash = window.location.hash;
            if (!hash) return;
            const id = hash.replace("#", "");
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        };

        window.addEventListener("hashchange", onHashChange);
        return () => window.removeEventListener("hashchange", onHashChange);
    }, []);

    return null;
}
