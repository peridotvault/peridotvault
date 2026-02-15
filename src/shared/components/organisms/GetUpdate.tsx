import { useState } from "react";
import { GoArrowDownRight, GoMail } from "react-icons/go";
import { PiCodeThin, PiPuzzlePieceThin } from "react-icons/pi";
import clsx from "clsx";
import BgGrainient from "../atoms/BgGrainient";

export const GetUpdate = () => {
  return (
    <section
      id="waitlist"
      className="w-full px-8 pb-4 pt-24 max-md:pt-10 flex justify-center "
    >
      <div className="w-full max-w-(--container-max-width) rounded-3xl max-md:rounded-2xl px-24 max-md:px-8 relative overflow-hidden flex justify-center items-center drop-shadow-2xl">
        <div className="flex h-full flex-col items-center justify-center lg:py-28 md:py-20 py-12 max-lg:w-full max-lg:justify-start lg:gap-18 md:gap-10 gap-8 max-md:gap-6 z-2">
          <h2 className="lg:text-7xl md:text-5xl text-3xl text-background max-w-4xl text-center font-medium">
            Get Exclusive PeridotVault Platform Updates
          </h2>

          {/* Form  */}
          <div className="flex flex-col w-full max-w-140">
            <RoleSelector />

            <div className="flex max-md:flex-col items-center w-full bg-background  rounded-2xl p-1.5  relative">
              <div className="flex items-center py-2 pl-3 w-full">
                <GoMail className="w-8 h-8 p-1 text-label" />
                <input
                  type="email"
                  name=""
                  className="py-1 px-3 max-md:px-6 max-md:text-base w-full placeholder:text-white/80 outline-none duration-300"
                  placeholder="Email Address"
                  required
                />
              </div>

              <button className="rounded-xl bg-accent text-background flex items-center justify-center h-full overflow-hidden group cursor-pointer max-md:w-full md:shrink-0">
                <span className="bg-white w-full rounded-xl h-full flex items-center justify-center text-sm p-3 font-medium">
                  Join Waitlist
                </span>
                <GoArrowDownRight className="w-14 h-12 p-3 group-hover:-rotate-45 duration-300" />
              </button>
            </div>
          </div>
        </div>
        {/* <div style={{ width: "100%", height: "600px", position: "relative" }}> */}
        <BgGrainient />
        {/* </div> */}
      </div>
    </section>
  );

  function RoleSelector() {
    const [roles, setRoles] = useState<string[]>([]);

    const toggleRole = (value: string) => {
      setRoles((prev) =>
        prev.includes(value)
          ? prev.filter((r) => r !== value)
          : [...prev, value],
      );
    };

    const isActive = (value: string) => roles.includes(value);

    return (
      <div className="flex flex-col w-full">
        <div className="grid grid-cols-2 gap-2 h-28 w-full mb-2 p-1">
          {/* GAMERS */}
          <label className="relative cursor-pointer group">
            <input
              type="checkbox"
              value="gamer"
              className="hidden"
              onChange={() => toggleRole("gamer")}
            />

            <div
              className={clsx(
                "h-full w-full rounded-xl py-2 px-4 relative overflow-hidden drop-shadow-2xl transition-all duration-300 border",
                isActive("gamer")
                  ? "border-accent text-accent bg-background shadow-[0_0_25px_rgba(76,255,143,0.25)]"
                  : "border-border bg-background",
              )}
            >
              <span
                className={clsx(
                  "duration-300",
                  isActive("developer") ? "" : "group-hover:text-secondary",
                )}
              >
                Gamers
              </span>
              <PiPuzzlePieceThin
                className={clsx(
                  "absolute -right-5 -bottom-5 text-8xl -rotate-45 opacity-40 duration-300",
                  isActive("gamer")
                    ? "text-accent"
                    : "text-border group-hover:text-secondary",
                )}
              />
            </div>
          </label>

          {/* DEVELOPER */}
          <label className="relative cursor-pointer group">
            <input
              type="checkbox"
              value="developer"
              className="hidden"
              onChange={() => toggleRole("developer")}
            />

            <div
              className={clsx(
                "h-full w-full rounded-xl py-2 px-4 relative overflow-hidden drop-shadow-2xl transition-all duration-300 border",
                isActive("developer")
                  ? "border-accent text-accent bg-background shadow-[0_0_25px_rgba(76,255,143,0.25)]"
                  : "border-border bg-background hover:border-accent/60",
              )}
            >
              <span
                className={clsx(
                  "duration-300",
                  isActive("developer") ? "" : "group-hover:text-secondary",
                )}
              >
                Developer
              </span>
              <PiCodeThin
                className={clsx(
                  "absolute -right-5 -bottom-5 text-8xl -rotate-45 opacity-40 duration-300",
                  isActive("developer")
                    ? "text-accent"
                    : "text-border group-hover:text-secondary",
                )}
              />
            </div>
          </label>
        </div>
      </div>
    );
  }
};
