"use client";
import { Input } from "@/components/Input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { BaseSyntheticEvent } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";

const SignUpSchema = z
  .object({
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    name: z.string().min(1, { message: "Name is required" }),
    lastname: z.string().min(1, { message: "Name is required" }),
    password: z
      .string()
      .min(8, { message: "Password must be atleast 6 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be atleast 6 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don't match",
  });

type SignUp = z.infer<typeof SignUpSchema>;

export default function SignUp() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUp>({
    resolver: zodResolver(SignUpSchema),
  });

  const handleSend = async (data: SignUp, e?: BaseSyntheticEvent) => {
    e?.preventDefault();
    console.log("TESTE: ", data);
    const { password, email, name, lastname } = data;

    try {
      const response = await fetch("/api/users/createNewUser", {
        method: "POST",
        body: JSON.stringify({
          name,
          lastName: lastname,
          email,
          password,
        }),
      });

      if (response.status === 201) {
        console.log("finish");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="bg-[#141420] w-scren min-h-screen flex justify-center items-center">
      <form className="w-[600px] h-[600px] bg-[#1d1d23] flex flex-col gap-4 justify-between items-center p-10 rounded-lg">
        <p className="font-medium text-3xl text-white">Finance</p>
        <div className=" flex flex-col gap-4 justify-between ">
          <Input
            label="Email:"
            placeholder="Anybody@email.com"
            control={control}
            name="email"
          />

          <div className="flex flex-row justify-between">
            <Input
              label="Name:"
              placeholder="Write your name"
              control={control}
              name="name"
            />
            <Input
              label="Lastname:"
              placeholder="Write your lastname"
              control={control}
              name="lastname"
            />
          </div>

          <div className="flex flex-row gap-3">
            <Input
              label="Password:"
              isPassword={true}
              placeholder="Write your password..."
              control={control}
              name="password"
            />
            <Input
              label="Confirm Password:"
              isPassword={true}
              placeholder="Confirm your password..."
              control={control}
              name="confirmPassword"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <button
            type="submit"
            className="w-48 h-12 bg-[#e61957]  hover:bg-opacity-80 transition-colors text-lg text-white font-medium rounded-lg"
            onClick={handleSubmit(handleSend)}
          >
            Sign Up
          </button>
          <Link
            className="text-lg font-semibold text-[#86A7FC] hover:text-[#3468C0] transition-all"
            href={"#"}
          >
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}
