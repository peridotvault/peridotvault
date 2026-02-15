"use client";

import { FaCircleCheck, FaCircleXmark, FaSpinner } from "react-icons/fa6";
import { Toaster } from "sonner";

export function ToasterComponent() {
  return (
    <Toaster
      position="bottom-right"
      richColors={false}
      visibleToasts={3}
      icons={{
        success: <FaCircleCheck className="text-green-500" />,
        error: <FaCircleXmark className="text-red-500" />,
        loading: <FaSpinner className="text-[#ffffff69] animate-spin" />,
      }}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: `        group pointer-events-auto
        flex w-[360px] items-center gap-4
        rounded-xl border border-[#ffffff69]
        bg-background
        p-3 text-sm
      `,
          title: `        font-medium leading-5
        tracking-[0.01em]
      `,
          description: `        mt-0.5 leading-5 text-white/70
      `,
          icon: `lex items-center justify-center shrink-0 w-5 h-5 text-lg relative`,
          actionButton: `        ml-auto inline-flex h-8 items-center justify-center
        rounded-xl px-3 font-semibold
        bg-[#4cff8f] text-[#06120b]
        hover:brightness-110 active:brightness-95
        transition
      `,
          cancelButton: `        inline-flex h-8 items-center justify-center
        rounded-xl px-3 font-medium
        border border-white/15
        bg-white/5 text-white/80
        hover:bg-white/10
        transition
      `,
        },
      }}
    />
  );
}
