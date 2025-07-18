import { vercel } from "@t3-oss/env-core/presets-zod";
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
import { keys as auth } from "@criforge/auth/keys";
import { keys as db } from "@criforge/database/keys";

export const env = createEnv({
    extends: [vercel(), auth(), db()],
    server: {
        ANALYZE: z.string().optional(),
        // Added by Vercel
        NEXT_RUNTIME: z.enum(["nodejs", "edge"]).optional(),
        NODE_ENV: z
            .enum(["development", "production", "test"])
            .default("development"),
    },
    client: {},
    runtimeEnv: {
        ANALYZE: process.env.ANALYZE,
        NEXT_RUNTIME: process.env.NEXT_RUNTIME,
        NODE_ENV: process.env.NODE_ENV,
    },
});