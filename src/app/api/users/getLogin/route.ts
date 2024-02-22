import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
const bcrypt = require("bcrypt");

type LoginObj = {
  email?: string;
  password?: string;
};

export async function ValidationLogin(data: LoginObj) {
  try {
    const { email, password } = data;

    if (!password) {
      throw new Error("Empty password!");
    }

    const user = await prisma.users.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("User does not exists!");
    }

    const matchPassword = await bcrypt.compare(password, user?.password);

    if (!matchPassword) {
      throw new Error("Wrong Password");
    } else {
      console.log("entrei aq");
      return {
        id: user.id.toString(),
        email: user.email,
        name: user.name,
      };
    }
  } catch (error) {
    console.log(JSON.stringify(error));
    throw new Error(JSON.stringify(error));
  }
}
