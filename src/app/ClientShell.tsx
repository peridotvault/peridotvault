"use client";

import { ReactNode } from "react";
import { MainLayout } from "../layouts/MainLayout";

type ClientShellProps = {
  children: ReactNode;
};

export default function ClientShell({ children }: ClientShellProps) {
  return <MainLayout>{children}</MainLayout>;
}
