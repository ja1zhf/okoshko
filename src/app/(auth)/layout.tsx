"use client";

import { isAuth } from "@/tools/tools";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!isAuth()) {
      redirect("/login");
    }
  }, [])

  return <>{children}</>;
}