import type React from "react"
import { ThemeProvider } from "@/components/ThemeProvider"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <div className="min-h-screen">{children}</div>
    </ThemeProvider>
  )
}
