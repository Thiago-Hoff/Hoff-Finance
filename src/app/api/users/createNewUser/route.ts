import prisma from "@/lib/prisma";
import { users } from "@prisma/client";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt");

export async function POST(request: Request) {
  console.log("aaaa");
  try {
    const data: users = await request.json();
    const { email, name, lastName, password } = data;
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashPassword = bcrypt.hashSync(password, salt);

    console.log("data", data);
    console.log("hashPassword", hashPassword);
    const user = await prisma.users.create({
      data: {
        name,
        email,
        lastName,
        password: hashPassword,
      },
    });

    return NextResponse.json(
      { user },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log("aaaaa", error);
    throw new Error(JSON.stringify(error));
  }
}
