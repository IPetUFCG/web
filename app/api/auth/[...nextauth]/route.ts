import NextAuth, { User } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";

const providers = [
  CredentialsProvider({
    name: "Credentials",
    credentials: {
      email: { label: "email", type: "text" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials, req) {
      let user: User | null = null;
      if (credentials?.email === "luiz@mail.com")
        user = {
          id: "123",
          name: "Luiz",
          email: "luiz.felipe.farias@ccc.ufcg.edu.br",
        };
      return user;
    },
  }),
  //   GoogleProvider({
  //     clientId: process.env.GOOGLE_ID || "",
  //     clientSecret: process.env.GOOGLE_SECRET || "",
  //   }),
  //   FacebookProvider({
  //     clientId: process.env.FACEBOOK_ID || "",
  //     clientSecret: process.env.FACEBOOK_SECRET || "",
  //   }),
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
];

const handler = NextAuth({
  providers,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
