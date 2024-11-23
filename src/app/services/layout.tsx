"use client";

import { redirect } from "next/navigation";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = localStorage.getItem("user");

  if (!user) {
    redirect("/login");
  }

  const userObj: ProfileType = JSON.parse(user);

  if (userObj.role !== "master") {
    redirect("/404");
  }

  return <>{children}</>;
}
