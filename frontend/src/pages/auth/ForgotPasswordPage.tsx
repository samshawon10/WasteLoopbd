
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, Leaf, Mail, CheckCircle2 } from "lucide-react";

import Logo from "../../components/common/Logo";

import {
  forgotPasswordSchema,
  type ForgotPasswordFormData,
} from "../../features/auth/schemas/forgotPasswordSchema";

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: ForgotPasswordFormData) => {
    console.log("Password reset email:", data.email);
    setSubmitted(true);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F7F9F5] px-6 py-12">
      <div className="w-full max-w-md">

        <div className="mb-10 flex items-center justify-between">
          <Logo />
          <Link
            to="/"
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-green-700"
          >
            <ArrowLeft size={16} />
            Home
          </Link>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm sm:p-9">

          <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-700">
            {submitted ? (
              <CheckCircle2 size={28} />
            ) : (
              <Leaf size={28} />
            )}
          </div>

          {submitted ? (
            <>
              <h1 className="text-3xl font-bold text-[#17231D]">
                Request received
              </h1>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                Your email has passed frontend validation.
                Password reset functionality will be available
                after backend integration.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="mt-7 w-full rounded-xl bg-green-800 py-3.5 text-sm font-semibold text-white transition hover:bg-green-900"
              >
                Try another email
              </button>
            </>
          ) : (
            <>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-700">
                Account Recovery
              </p>

              <h1 className="text-3xl font-bold text-[#17231D]">
                Forgot your password?
              </h1>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Enter your registered email address to start
                the password recovery process.
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 space-y-5"
              >
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="email"
                      placeholder="you@example.com"
                      {...register("email")}
                      className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-600/10"
                    />
                  </div>

                  {errors.email && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-800 py-3.5 text-sm font-semibold text-white transition hover:bg-green-900"
                >
                  Continue
                  <ArrowRight size={18} />
                </button>
              </form>
            </>
          )}

          <div className="mt-7 border-t border-gray-100 pt-6 text-center">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-900"
            >
              <ArrowLeft size={16} />
              Back to Login
            </Link>
          </div>
        </div>

        <p className="mt-7 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} WasteLoopBD
        </p>
      </div>
    </main>
  );
}
