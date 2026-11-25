
import { z } from "zod";

export const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(3, "Name must be at least 3 characters")
      .max(60, "Name is too long"),

    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email address"),

    phone: z
      .string()
      .regex(/^01[3-9]\d{8}$/, "Enter a valid Bangladeshi phone number"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Include at least one uppercase letter")
      .regex(/[a-z]/, "Include at least one lowercase letter")
      .regex(/[0-9]/, "Include at least one number"),

    confirmPassword: z.string().min(1, "Please confirm your password"),

    role: z.enum([
      "CITIZEN",
      "BUYER",
      "GREEN_BUSINESS_OWNER",
    ]),

    acceptTerms: z
      .boolean()
      .refine((value) => value === true, {
        message: "You must accept the terms and conditions",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
