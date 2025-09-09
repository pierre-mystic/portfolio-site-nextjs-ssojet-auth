
import { useSession, signIn, signOut } from "next-auth/react"

export function useAuth() {
  const { data: session, status } = useSession()
  const isAuthenticated = status === "authenticated"
  const isLoading = status === "loading"
  const user = session?.user || null

  return {
    user,
    isAuthenticated,
    isLoading,
    error: null,
    login: () => signIn("ssojet"),
    logout: () => signOut(),
    checkAuth: () => {},
    clearError: () => {}
  }
}
