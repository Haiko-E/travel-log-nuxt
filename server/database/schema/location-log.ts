import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { user } from "./auth-schema";
import { location } from "./location";

export const locationLog = sqliteTable("locationLog", {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text().notNull().unique(),
  startedAt: integer().notNull(),
  endedAt: integer().notNull(),
  lat: real().notNull(),
  long: real().notNull(),
  locationId: integer().notNull().references(() => location.id),
  userId: integer().notNull().references(() => user.id),
  createdAt: integer().notNull().$default(() => Date.now()),
  updatedAt: integer().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
