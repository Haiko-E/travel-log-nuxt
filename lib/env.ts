import { z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
});

// eslint-disable-next-line node/no-process-env
envSchema.parse(process.env);

export type EnvSchema = z.infer<typeof envSchema>;
