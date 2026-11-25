
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
  User,
  Phone,
  ChevronDown,
} from "lucide-react";

import Logo from "../../components/common/Logo";

import {
  registerSchema,
  type RegisterFormData,
} from "../../features/auth/schemas/registerSchema";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      role: "CITIZEN",
      acceptTerms: false,
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    setMessage(
      "Registration form validated successfully. Backend integration will be added later."
    );

    console.log("Registration form data:", data);
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
              Be part of the
              <span className="text-green-400"> green revolution.</span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-8 text-gray-400">
              Create your WasteLoopBD account and become part of a
              community transforming waste into opportunities.
            </p>

            <div className="mt-10 space-y-5">

              {[
                "Make responsible waste management easier",
                "Earn rewards through verified recycling",
                "Support a sustainable local economy",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/15 text-green-400">
                    <Leaf size={13} />
                  </span>

                  <span className="text-sm text-gray-300">
                    {item}
                  </span>
                </div>
              ))}

            </div>
          </div>

          <p className="relative z-10 text-sm text-gray-500">
            © {new Date().getFullYear()} WasteLoopBD. Building a sustainable Dhaka.
          </p>
        </section>

        {/* Right Side */}
        <section className="flex items-center justify-center px-6 py-12 sm:px-10">

          <div className="w-full max-w-md">

            <div className="mb-9 flex items-center justify-between lg:hidden">
              <Logo />

              <Link
                to="/"
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-green-700"
              >
                <ArrowLeft size={16} />
                Home
              </Link>
            </div>

            <div className="mb-8">

              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-700">
                Get Started
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#17231D] sm:text-4xl">
                Create your account
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Join WasteLoopBD and start making a difference.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Full Name
                </label>

                <div className="relative">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    {...register("fullName")}
                    className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-600/10"
                  />
                </div>

                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email Address
                </label>

                <div className="relative">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="email"
                    placeholder="you@example.com"
                    {...register("email")}
                    className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-600/10"
                  />
                </div>

                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Phone Number
                </label>

                <div className="relative">
                  <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="tel"
                    placeholder="01XXXXXXXXX"
                    {...register("phone")}
                    className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-600/10"
                  />
                </div>

                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Role */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Account Type
                </label>

                <div className="relative">
                  <select
                    {...register("role")}
                    className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 pr-11 text-sm text-gray-700 outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-600/10"
                  >
                    <option value="CITIZEN">Citizen</option>
                    <option value="BUYER">Buyer</option>
                    <option value="GREEN_BUSINESS_OWNER">
                      Green Business Owner
                    </option>
                  </select>

                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                </div>

                {errors.role && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.role.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    {...register("password")}
                    className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-12 text-sm outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-600/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-700"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Confirm Password
                </label>

                <div className="relative">
                  <LockKeyhole size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    {...register("confirmPassword")}
                    className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-12 text-sm outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-600/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label="Toggle confirm password visibility"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-700"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {errors.confirmPassword && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Terms */}
              <div>
                <label className="flex cursor-pointer items-start gap-2 text-sm leading-6 text-gray-600">
                  <input
                    type="checkbox"
                    {...register("acceptTerms")}
                    className="mt-1 h-4 w-4 shrink-0 accent-green-700"
                  />

                  <span>
                    I agree to the{" "}
                    <Link to="/terms" className="font-semibold text-green-700 hover:underline">
                      Terms & Conditions
                    </Link>
                    {" "}and{" "}
                    <Link to="/privacy" className="font-semibold text-green-700 hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>

                {errors.acceptTerms && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.acceptTerms.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-800 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-900/10 transition hover:bg-green-900 disabled:opacity-60"
              >
                Create Account
                <ArrowRight size={18} />
              </button>

              {message && (
                <p className="rounded-xl border border-green-200 bg-green-50 p-3 text-sm leading-6 text-green-800">
                  {message}
                </p>
              )}

            </form>

            <p className="mt-7 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-green-700 hover:text-green-900"
              >
                Sign In
              </Link>
            </p>

            <div className="mt-8 border-t border-gray-200 pt-6 text-center">
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
