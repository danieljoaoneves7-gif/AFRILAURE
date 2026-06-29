'use client'

import { ActivitiesShowcase } from "@/components/activities-showcase"
import { Header } from "@/components/header"

export default function ActivitiesPage() {
  return (
    <>
      <Header />
      <div className="pt-16">
        <ActivitiesShowcase />
      </div>
    </>
  )
}
