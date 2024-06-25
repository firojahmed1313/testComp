import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/config/db";
import UserModel from "@/lib/model/User";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Enter your email" },
                password: { label: "Password", type: "password", placeholder: "Enter your password" },
            },
            async authorize(credentials: any): Promise<any> {
                await dbConnect();
                try {
                    const user = await UserModel.findOne({
                        $or: [{ userName: credentials.username }, { email: credentials.email }],
                    });
                    if (!user) {
                        throw new Error("No User Found");
                    }
                    if (!user.isVerified) {
                        throw new Error("Please Verify Your Email");
                    }
                    if (credentials.password === user.password) {
                        throw new Error("Invalid Password");
                    }
                    return user;
                } catch (error: any) {
                    console.warn(error.message);
                    return null; // Returning null indicates failed authentication
                }
            },
        }),
    ],
    pages: {
        signIn: "/sign-in",
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXT_AUTH_SECRET,
};