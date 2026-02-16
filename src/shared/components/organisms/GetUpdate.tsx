"use client";

import { useState } from "react";
import clsx from "clsx";
import { GoMail } from "react-icons/go";
import { FaCode, FaPuzzlePiece } from "react-icons/fa6";
import BgGrainient from "../atoms/BgGrainient";
import { toastService } from "@/shared/infra/toast/toast.service";
import { Button } from "../molecules/Button";

export const GetUpdate = () => {
  const [roles, setRoles] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const canTypeEmail = roles.length > 0;
  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  const canSubmit = canTypeEmail && isEmailValid && !loading;

  const handleSubmit = async () => {
    if (loading) return;

    if (roles.length === 0) {
      toastService.error("Role Required", {
        desc: "Please choose at least one role.",
      });
      return;
    }

    if (!isEmailValid) {
      toastService.error("Invalid Email", {
        desc: "Enter a valid email address.",
      });
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          roles,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Subscription failed");
      }

      toastService.success("You're In 🚀", {
        desc: "Welcome to the PeridotVault waitlist.",
      });

      setEmail("");
      setRoles([]);
    } catch (error) {
      toastService.error("Something went wrong", {
        desc: "" + error,
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="waitlist"
      className="w-full px-8 max-md:px-4 pb-4 pt-24 max-md:pt-10 flex justify-center"
    >
      <div className="w-full max-w-(--container-max-width) rounded-3xl max-md:rounded-2xl px-24 max-md:px-8 relative overflow-hidden flex justify-center items-center drop-shadow-2xl">
        {/* CONTENT */}
        <div className="flex h-full flex-col items-center justify-center lg:py-28 md:py-20 py-12 max-lg:w-full lg:gap-18 md:gap-10 gap-8 z-10">
          <h2 className="lg:text-7xl md:text-5xl text-3xl text-background max-w-4xl text-center font-medium">
            Get Exclusive PeridotVault Platform Updates
          </h2>

          {/* FORM */}
          <div className={"flex flex-col w-full max-w-140"}>
            <RoleSelector roles={roles} setRoles={setRoles} />

            <div
              className={
                "flex max-md:flex-col items-center w-full bg-background rounded-2xl p-1.5 relative"
              }
            >
              {/* EMAIL */}
              <div
                className={clsx(
                  "flex items-center py-2 pl-3 w-full transition-all",
                  !canTypeEmail && "opacity-50",
                )}
              >
                <GoMail className="w-8 h-8 p-1 text-label" />
                <input
                  type="email"
                  className="py-1 px-3 w-full placeholder:text-white/80 outline-none bg-transparent disabled:cursor-not-allowed"
                  placeholder={
                    canTypeEmail ? "Email Address" : "Choose your role first..."
                  }
                  value={email}
                  disabled={!canTypeEmail}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => {
                    if (!canTypeEmail) {
                      toastService.error("Choose Your Role First", {
                        desc: "Select Gamer or Developer to continue.",
                      });
                    }
                  }}
                />
              </div>

              {/* BUTTON */}
              <Button
                onClick={handleSubmit}
                disabled={!canSubmit}
                className="max-md:w-full md:shrink-0"
              >
                Join Waitlist
              </Button>
              {/* <button
                onClick={handleSubmit}
                disabled={!canSubmit}
                className={clsx(
                  "rounded-xl flex items-center justify-center h-full overflow-hidden group max-md:w-full md:shrink-0 transition-all duration-300 bg-accent text-background",
                  canSubmit
                    ? "cursor-pointer"
                    : "cursor-not-allowed opacity-50",
                )}
              >
                <span className="bg-white w-full rounded-xl h-full flex items-center justify-center text-sm p-3 font-medium">
                  {loading ? "Joining..." : "Join Waitlist"}
                </span>
                <GoArrowDownRight
                  className={clsx(
                    "w-14 h-12 p-3 duration-300",
                    canSubmit && "group-hover:-rotate-45",
                  )}
                />
              </button> */}
            </div>
          </div>
        </div>

        {/* BACKGROUND */}
        <BgGrainient />
      </div>
    </section>
  );
};

/* ============================= */
/* ROLE SELECTOR COMPONENT       */
/* ============================= */

function RoleSelector({
  roles,
  setRoles,
}: {
  roles: string[];
  setRoles: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const listRole = [
    { name: "Gamer", value: "gamer", Icon: FaPuzzlePiece },
    { name: "Developer", value: "developer", Icon: FaCode },
  ];

  const toggleRole = (value: string) => {
    setRoles((prev) =>
      prev.includes(value) ? prev.filter((r) => r !== value) : [...prev, value],
    );
  };

  const isActive = (value: string) => roles.includes(value);

  return (
    <div className="grid grid-cols-2 gap-2 h-28 w-full mb-2 p-1">
      {listRole.map((item) => (
        <label key={item.value} className="relative cursor-pointer group">
          <input
            type="checkbox"
            value={item.value}
            className="hidden"
            onChange={() => toggleRole(item.value)}
          />

          <div
            className={clsx(
              "h-full w-full rounded-xl py-2 px-4 relative overflow-hidden transition-all duration-300 border text-lg",
              isActive(item.value)
                ? "border-background/20 text-background bg-white shadow-[0_0_25px_rgba(76,255,143,0.25)]"
                : "border-border bg-background",
            )}
          >
            {item.name}

            <item.Icon
              className={clsx(
                "absolute -right-5 -bottom-5 text-8xl -rotate-45 duration-300",
                isActive(item.value)
                  ? "text-accent"
                  : "text-border group-hover:text-secondary",
              )}
            />
          </div>
        </label>
      ))}
    </div>
  );
}
