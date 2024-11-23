"use client";

import { redirect } from "next/navigation";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = localStorage.getItem("user");

  if (user) {
    redirect("/");
  }

  return <>{children}</>;
}
