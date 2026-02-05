"use server"

import db from "@/database"
import { clinicsTable, usersToClinicsTable } from "@/database/schema"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

export async function createClinic(data: { name: string }) {
  const sessions = await auth.api.getSession({
    headers: await headers(),
  })

  if (!sessions?.user.id) {
    throw new Error("Unauthorized")
  }

  const clinic = await db.insert(clinicsTable).values({ name: data.name }).returning()
  await db.insert(usersToClinicsTable).values({
    userId: sessions.user.id,
    clinicId: clinic[0].id,
  })
}