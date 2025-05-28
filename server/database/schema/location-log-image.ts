import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { user } from "./auth-schema";
import { locationLog } from "./location-log";

export const locationLogImage = sqliteTable("locationLogImage", {
  id: integer().primaryKey({ autoIncrement: true }),
  key: text().notNull(),
  locationLogId: integer().notNull().references(() => locationLog.id),
  userId: integer().notNull().references(() => user.id),
  createdAt: integer().notNull().$default(() => Date.now()),
  updatedAt: integer().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
