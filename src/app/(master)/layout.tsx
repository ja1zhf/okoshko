"use client";

import { isMaster } from "@/tools/tools";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!isMaster()) {
      redirect("/");
    }
  }, [])

  return <>{children}</>;
}