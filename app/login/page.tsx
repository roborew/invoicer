import QuibillLogo from "@/app/ui/quibill-logo";
import LoginForm from "@/app/ui/login-form";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-sand-50 px-4 py-8 sm:px-6">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <QuibillLogo />
        </div>

        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
