import db from "@/database";
import { usersToClinicsTable } from "@/database/schema";
import { auth } from "@/lib/auth";
import { eq } from "drizzle-orm/sql/expressions/conditions";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const clinics = session?.user.id
    ? await db.query.usersToClinicsTable.findMany({
        where: eq(usersToClinicsTable.userId, session.user.id),
      })
    : [];

  if (clinics.length === 0) {
    redirect("/clinic-form");
  }

  return <div>Dashboard</div>;
}
