"use client"

import { Button } from "@workspace/ui/components/button"
import { add } from "@workspace/math/add"
import { Input } from "@workspace/ui/components/input"
import { useQuery, useMutation } from "convex/react"
import { api } from "@workspace/backend/convex/_generated/api"
import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";

export default function Page() {
  // const users = useQuery(getAllUsers)
  const users = useQuery(api.users.getAllUsers) ?? [];
  const addUser = useMutation(api.users.addUser) ?? [];
  return (
    <>
      <Authenticated>
        <div className="flex items-center justify-center min-h-svh">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">Hello World/web</h1>
            <Button size="sm" onClick={() => addUser({ name: "John Doe" })}>Add User</Button>

            <pre className="text-sm">{JSON.stringify(users, null, 2)}</pre>
            <UserButton />
          </div>
        </div>
      </Authenticated>

      <Unauthenticated>
        <p>Please sign in to continue</p>
        <SignInButton />
      </Unauthenticated>
    </>
  )
}
