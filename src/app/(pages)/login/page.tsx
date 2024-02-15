"use client";
import { Input } from "@/components/Input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { BaseSyntheticEvent } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 6 characters" }),
});

type Login = z.infer<typeof LoginSchema>;

export default function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Login>({
    resolver: zodResolver(LoginSchema),
  });

  const handleSend = (data: Login, e?: BaseSyntheticEvent) => {
    e?.preventDefault();

    const { password, email } = data;
    console.log("penis", data);
  };

  return (
    <div className="bg-[#141420] w-scren min-h-screen flex justify-center items-center">
      <form className="w-[600px] h-[600px] bg-[#1d1d23] flex flex-col gap-4 justify-between items-center p-10 rounded-lg">
        <p className="font-medium text-3xl text-white">Finance</p>
        <div className=" flex flex-col gap-4 justify-between items-center">
          <Input
            label="Email:"
            placeholder="Anybody@email.com"
            control={control}
            name="email"
          />
          <Input
            label="Password:"
            isPassword={true}
            placeholder="Write your password..."
            control={control}
            name="password"
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <button
            type="submit"
            className="w-48 h-12 bg-[#e61957]  hover:bg-opacity-80 transition-colors text-lg text-white font-medium rounded-lg"
            onClick={handleSubmit(handleSend)}
          >
            Sign In
          </button>
          <Link
            className="text-lg font-semibold text-[#86A7FC] hover:text-[#3468C0] transition-all"
            href={"/signUp"}
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
