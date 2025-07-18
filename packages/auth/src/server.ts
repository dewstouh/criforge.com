import { betterAuth } from "better-auth";
import { keys } from "./keys";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { db } from "@criforge/database";

const { NEXT_PUBLIC_BETTER_AUTH_URL, BETTER_AUTH_SECRET } = keys()

export const auth = betterAuth({
    database: prismaAdapter(db, {
        provider: "postgresql"
    }),
    secret: BETTER_AUTH_SECRET,
    user: {
        deleteUser: {
            enabled: true,
        },
    },
    emailAndPassword: {
        enabled: true,
    },
    baseURL: NEXT_PUBLIC_BETTER_AUTH_URL,
    appName: "OpenCut",
    trustedOrigins: ["http://localhost:3000"],
});

export type Auth = typeof auth;