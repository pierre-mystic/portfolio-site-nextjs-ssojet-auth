import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth"
import { OAuthConfig } from "next-auth/providers/oauth"
import config from "@/lib/config"

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET || "your-secret-key-change-this-in-production",
  debug: true,
  providers: [
    {
      id: "ssojet",
      name: "SSOJet",
      type: "oauth",
      clientId: config.ssojet.clientId,
      clientSecret: config.ssojet.clientSecret,
      wellKnown: config.ssojet.oidcUrl,
      issuer: config.ssojet.authorityUrl,
      authorization: {
        params: {
          scope: config.ssojet.scope.join(" "),
        }
      },
      checks: ["pkce", "state"],
      profile(profile: any) {
        console.log("Profile received:", profile)
        return {
          id: profile.sub,
          name: profile.name || profile.preferred_username,
          email: profile.email,
          image: profile.picture || null,
        }
      },
      allowDangerousEmailAccountLinking: true,
      client: {
        id_token_signed_response_alg: "RS256",
        token_endpoint_auth_method: "client_secret_post",
      },
    } as OAuthConfig<any>
  ],
  session: {
    strategy: "jwt"
  },
  // Remove custom signIn page to redirect directly to SSOJet
  pages: {},
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.id = (profile as any).sub
        token.email = (profile as any).email
        token.name = (profile as any).name
        token.picture = (profile as any).picture
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id
        session.user.email = token.email as string
        session.user.name = token.name as string
        session.user.image = token.picture as string
      }
      return session
    }
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
