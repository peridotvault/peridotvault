"use client";

import { useState } from "react";
import clsx from "clsx";
import { GoMail } from "react-icons/go";
import { FaCode, FaPuzzlePiece } from "react-icons/fa6";
import { toastService } from "@/shared/infra/toast/toast.service";
import { Button } from "../molecules/Button";
import { SectionHeader } from "../atoms/SectionHeader";
import { GlyphTide } from "@/components/react-bits/glyph-tide";

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
    <section id="waitlist" className="border-b border-line">
      <div className="mx-auto w-full max-w-(--container-max-width)">
        <SectionHeader
          title="Get Exclusive PeridotVault Platform Updates"
        />
        <div className="relative overflow-hidden border-t border-line bg-background">
          <GlyphTide
            colors={["#349b65", "#87ee83"]}
            backgroundColor="#0d0f0e"
            fontSize={18}
            dpr={1}
            interactive={false}
            clickRipples={false}
            waves={0.5}
            foam={0}
            contours={0}
            className="absolute inset-0 opacity-40"
          />
          <div className="relative z-10 flex flex-col items-center px-12 py-18 max-md:px-8 max-md:py-12">
            {/* FORM */}
            <div className={"flex flex-col w-full max-w-140"}>
              <RoleSelector roles={roles} setRoles={setRoles} />

              <div
                className={
                  "flex max-md:flex-col items-center w-full bg-background rounded-none border border-line p-1.5 relative"
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
              </div>
            </div>
          </div>
        </div>
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
              "h-full w-full rounded-none py-2 px-4 relative overflow-hidden transition-all duration-300 border text-lg",
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
