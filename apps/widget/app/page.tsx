"use client"
import { Button } from "@workspace/ui/components/button"
import { add } from "@workspace/math/add"
import { Input } from "@workspace/ui/components/input"
import { useQuery } from "convex/react"
import { api } from "@workspace/backend/convex/_generated/api"

export default function Page() {
  // const users = useQuery(getAllUsers)
  const users = useQuery(api.users.getAllUsers) ?? [];
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World/widget</h1>
        <Button size="sm">Button</Button>

        <pre className="text-sm">{JSON.stringify(users, null, 2)}</pre>

      </div>
    </div>
  )
}
