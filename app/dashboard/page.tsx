"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useSession, signOut } from "next-auth/react"
import { ProtectedRoute } from "@/components/protected-route"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  User, 
  Mail, 
  Shield, 
  LogOut, 
  Clock, 
  Key,
  AlertCircle
} from "lucide-react"

export default function Dashboard() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [localError, setLocalError] = useState<string>("")

  const handleLogout = async () => {
    try {
      await signOut({ callbackUrl: "/" })
    } catch (error) {
      console.error("Logout error:", error)
      setLocalError("Failed to logout. Please try again.")
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-background to-muted p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back to your portfolio</p>
            </div>
            <Button onClick={handleLogout} variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>

          {localError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{localError}</AlertDescription>
            </Alert>
          )}

          {session?.user && (
            <>
              {/* User Profile Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>User Profile</span>
                  </CardTitle>
                  <CardDescription>
                    Your authentication information and profile details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={session.user.image || ""} alt={session.user.name || "User"} />
                      <AvatarFallback>
                        {session.user.name ? getInitials(session.user.name) : "U"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold">
                        {session.user.name || "Unknown User"}
                      </h3>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <span>{session.user.email || "No email provided"}</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-green-600" />
                        <span className="font-medium">Authentication Status</span>
                      </div>
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        Authenticated
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Key className="h-4 w-4 text-blue-600" />
                        <span className="font-medium">User ID</span>
                      </div>
                      <p className="text-sm text-muted-foreground font-mono">
                        {(session.user as any).id || "N/A"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>
                    Manage your portfolio and account settings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button 
                      variant="outline" 
                      onClick={() => router.push("/")}
                      className="h-20 flex-col space-y-2"
                    >
                      <User className="h-6 w-6" />
                      <span>View Portfolio</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-20 flex-col space-y-2"
                      disabled
                    >
                      <Shield className="h-6 w-6" />
                      <span>Security Settings</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={handleLogout}
                      className="h-20 flex-col space-y-2"
                    >
                      <LogOut className="h-6 w-6" />
                      <span>Logout</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </ProtectedRoute>
  )
}
