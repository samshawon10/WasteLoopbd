
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  Leaf,
  LockKeyhole,
  Mail,
} from "lucide-react";

import Logo from "../../components/common/Logo";
import {
  loginSchema,
  type LoginFormData,
} from "../../features/auth/schemas/loginSchema";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setMessage(
      "Form validation successful. Backend authentication will be connected later."
    );
    console.log("Login form data:", data);
  };

  return (
    <main className="min-h-screen bg-[#F7F9F5]">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left Side */}
        <section className="relative hidden overflow-hidden bg-[#10251B] p-12 text-white lg:flex lg:flex-col lg:justify-between xl:p-16">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-green-600/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" />

          <div className="relative z-10">
            <Logo variant="light" />
          </div>

          <div className="relative z-10 max-w-lg">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/15 text-green-400">
              <Leaf size={30} />
            </div>

            <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
              Every small action
              <span className="text-green-400"> creates a greener future.</span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-8 text-gray-400">
              Join the movement towards a cleaner, smarter and greener Dhaka.
              Together, we can turn waste into valuable resources.
            </p>

            <div className="mt-10 flex items-center gap-3">
              <span className="h-2 w-10 rounded-full bg-green-400" />
              <span className="h-2 w-2 rounded-full bg-white/30" />
              <span className="h-2 w-2 rounded-full bg-white/30" />
            </div>
          </div>

          <p className="relative z-10 text-sm text-gray-500">
            © {new Date().getFullYear()} WasteLoopBD. Building a sustainable Dhaka.
          </p>
        </section>

        {/* Right Side */}
        <section className="flex items-center justify-center px-6 py-12 sm:px-10">
          <div className="w-full max-w-md">

            <div className="mb-10 flex items-center justify-between lg:hidden">
              <Logo />
              <Link
                to="/"
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-green-700"
              >
                <ArrowLeft size={16} />
                Home
              </Link>
            </div>

            <div className="mb-9">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-700">
                Welcome Back
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#17231D] sm:text-4xl">
                Sign in to your account
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Continue your journey towards a greener Dhaka.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

              {/* Email */}
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

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    {...register("password")}
                    className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-11 pr-12 text-sm outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-600/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-700"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-2 text-xs text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Remember & Forgot */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    {...register("rememberMe")}
                    className="h-4 w-4 accent-green-700"
                  />
                  Remember me
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm font-semibold text-green-700 hover:text-green-900"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-800 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-900/10 transition hover:bg-green-900 disabled:opacity-60"
              >
                Sign In
                <ArrowRight size={18} />
              </button>

              {message && (
                <p className="rounded-xl border border-green-200 bg-green-50 p-3 text-sm leading-6 text-green-800">
                  {message}
                </p>
              )}
            </form>

            <p className="mt-8 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-green-700 hover:text-green-900"
              >
                Create an account
              </Link>
            </p>

            <div className="mt-10 border-t border-gray-200 pt-6 text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-green-700"
              >
                <ArrowLeft size={16} />
                Back to homepage
              </Link>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}
