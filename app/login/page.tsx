"use client"

import { useEffect } from "react"
import { signIn, getSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Loader2 } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()

  useEffect(() => {
    // Check if user is already authenticated
    getSession().then((session) => {
      if (session) {
        router.push("/dashboard")
      }
    })
  }, [router])

  const handleSSOLogin = () => {
    signIn("ssojet", { callbackUrl: "/dashboard" })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl text-center">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center">
            Sign in with your SSOJet account to continue
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Button 
            onClick={handleSSOLogin}
            className="w-full" 
          >
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>Sign in with SSOJet</span>
            </div>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
