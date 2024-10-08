import prisma from "@/prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';
import GoogleProvider from "next-auth/providers/google";

export const AuthOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider ({
            name: 'Credentials',
            credentials: {
                email: {label: 'Email', type: 'email', placeholder: 'Email'},
                pass: {label: 'Contraseña', type: 'password', placeholder: 'Contraseña'},
            },
            async authorize(credentials, req){
                if (!credentials?.email || !credentials?.pass)
                    return null;
                
                const user = await prisma.user.findUnique({
                    where: {email: credentials.email},
                })

                if (!user)
                    return null;
                
                const passwordsMatch = await bcrypt.compare(credentials.pass, user.hashedPassword!);

                return passwordsMatch ? user : null;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    session: {
        strategy: 'jwt'
    }
}