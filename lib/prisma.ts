// Lightweight, hand-written interface for the subset of the generated
// Prisma client this app actually uses. Using this instead of importing
// types from "@prisma/client" means the project type-checks even before
// `npx prisma generate` has been run (e.g. in CI steps or sandboxes without
// access to Prisma's binary CDN) — the real generated client's shape lines
// up with this interface once you do run `prisma generate` against
// prisma/schema.prisma.
type PrismaLike = {
  contactSubmission: {
    create: (args: {
      data: { name: string; email: string; phone?: string; message: string };
    }) => Promise<unknown>;
  };
  lead: {
    create: (args: {
      data: {
        name: string;
        email: string;
        phone: string;
        company?: string;
        revenueRange: string;
        bottleneck: string;
      };
    }) => Promise<unknown>;
  };
  newsletterSubscriber: {
    upsert: (args: {
      where: { email: string };
      update: Record<string, never>;
      create: { email: string };
    }) => Promise<unknown>;
  };
};

// Standard Next.js Prisma singleton pattern — prevents exhausting DB
// connections during hot-reload in development.
//
// The client is created LAZILY (only when getPrisma() is actually called)
// rather than at module load. This means the app never crashes on import
// if DATABASE_URL isn't set or `prisma generate` hasn't been run yet —
// which matters because forms work fine (via email + CRM) without a DB.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaLike };

export function getPrisma(): PrismaLike {
  if (globalForPrisma.prisma) return globalForPrisma.prisma;

  const { PrismaClient } = require("@prisma/client");
  const client = new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  }) as PrismaLike;

  if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = client;
  return client;
}
