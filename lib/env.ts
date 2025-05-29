import { z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z.string(),
  TURSO_DATABASE_URL: z.string(),
  TURSO_AUTH_TOKEN: z.string().optional(),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.string(),
  CLIENT_ID_GITHUB: z.string(),
  CLIENT_SECRET_GITHUB: z.string(),
});

export type EnvSchema = z.infer<typeof envSchema>;

// eslint-disable-next-line node/no-process-env
export default envSchema.parse(process.env);
