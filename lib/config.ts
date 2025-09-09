// Application configuration with environment variable fallbacks
const config = {
  // Site configuration
  site: {
    name: process.env.NEXT_PUBLIC_SITE_NAME || 'Modern Portfolio - Alex Chen',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'AI Software Engineer & Machine Learning Specialist Portfolio'
  },

  // SSOJet authentication configuration for NextAuth
  ssojet: {
    clientId: process.env.NEXT_PUBLIC_SSOJET_CLIENT_ID || '',
    clientSecret: process.env.SSOJET_CLIENT_SECRET || '',
    authorityUrl: process.env.NEXT_PUBLIC_SSOJET_AUTHORITY_URL || 'your ssojet authority url',
    oidcUrl: process.env.NEXT_PUBLIC_SSOJET_OIDC_URL || 'https://your ssojet authority url/.well-known/openid-configuration',
    authUrl: process.env.NEXT_PUBLIC_SSOJET_AUTH_URL || 'https://your ssojet authority url/authorize',
    redirectUri: process.env.NEXT_PUBLIC_SSOJET_REDIRECT_URI || 'http://localhost:3000/auth/callback',
    postLogoutRedirectUri: process.env.NEXT_PUBLIC_SSOJET_POST_LOGOUT_REDIRECT_URI || 'http://localhost:3000',
    scope: ['openid', 'profile', 'email'],  
    responseType: 'code',
    automaticSilentRenew: true,
    includeIdTokenInSilentRenew: true,
    loadUserInfo: true
  },

  // Development and debugging
  debug: {
    enabled: process.env.NODE_ENV === 'development',
    logLevel: process.env.DEBUG_LOG_LEVEL || 'info'
  },

  // Security settings
  security: {
    sessionTimeout: parseInt(process.env.SESSION_TIMEOUT || '3600'), // 1 hour default
    tokenRenewalOffset: parseInt(process.env.TOKEN_RENEWAL_OFFSET || '300'), // 5 minutes before expiry
    silentRenewTimeout: parseInt(process.env.SILENT_RENEW_TIMEOUT || '10000') // 10 seconds
  },

  // API endpoints (for future use)
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api',
    timeout: parseInt(process.env.API_TIMEOUT || '10000')
  }
}

// Validation function to ensure required configuration is present
export function validateConfig() {
  const requiredFields = [
    { key: 'ssojet.clientId', value: config.ssojet.clientId },
    { key: 'ssojet.authorityUrl', value: config.ssojet.authorityUrl },
    { key: 'ssojet.redirectUri', value: config.ssojet.redirectUri }
  ]

  const missingFields = requiredFields.filter(
    field => !field.value || field.value.includes('your-ssojet-')
  )

  if (missingFields.length > 0) {
    console.warn('⚠️  Missing or default SSOJet configuration detected:')
    missingFields.forEach(field => {
      console.warn(`   - ${field.key}: ${field.value}`)
    })
    console.warn('Please update your environment variables or the config file with actual SSOJet values.')
  }

  return missingFields.length === 0
}

// Helper function to get configuration with environment override
export function getConfig() {
  // Run validation in development
  if (config.debug.enabled) {
    validateConfig()
  }

  return config
}

export default config
