import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { ValidationLogin } from "../../users/getLogin/route";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials, _req) => {
        try {
          const credentialDetails = {
            email: credentials?.email,
            password: credentials?.password,
          };

          console.log("credentialDetails", credentialDetails);

          const response = await ValidationLogin(credentialDetails);
          console.log("response", response);

          if (response) {
            return response;
          }

          return null;
        } catch (e: any) {
          throw new Error(e);
        }
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };
