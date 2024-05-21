"use client";
import { SessionProvider } from "next-auth/react";
import ToastProvider from "./toastify";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <ToastProvider>{children}</ToastProvider>
    </SessionProvider>
  );
};

export default Providers;
