import React, { useState } from "react";

import { Control, Controller } from "react-hook-form";
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

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  isPassword?: boolean;
  label: string;
  name: string;
  control: Control<any>;
}

export function Input({
  isPassword = false,
  label,
  control,
  name,
  ...rest
}: InputProps) {
  const [onFocusEmail, setOnFocusEmail] = useState(false);

  return !isPassword ? (
    <div className="flex flex-col justify-center gap-1 text-[#F4F4F5]">
      <p className="text-lg">{label}</p>

      <Controller
        name={name}
        control={control}
        defaultValue={""}
        render={({ field }) => (
          <input
            {...field}
            {...rest}
            onFocus={() => setOnFocusEmail((prev) => !prev)}
            onBlur={() => setOnFocusEmail((prev) => !prev)}
            className={`w-full h-[40px] outline-none bg-transparent border-2  rounded-md px-2 placeholder:text-slate-300 placeholder:font-light placeholder:text-base ${
              onFocusEmail ? "border-[#e61957]" : "border-zinc-400"
            }`}
          />
        )}
      />
    </div>
  ) : (
    <div className="flex flex-col justify-center gap-1 text-[#F4F4F5]">
      <p className="text-lg">{label}</p>

      <Controller
        name={name}
        control={control}
        defaultValue={""}
        render={({ field }) => (
          <input
            type="password"
            {...field}
            {...rest}
            className="w-full h-[40px] outline-none bg-transparent border-2 border-zinc-400 rounded-md px-2 placeholder:text-slate-300 placeholder:font-light placeholder:text-base"
          />
        )}
      />
    </div>
  );
}
