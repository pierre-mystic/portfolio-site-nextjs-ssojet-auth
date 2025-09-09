import { UserManager } from "oidc-client-ts";
import config from "./config";

const oidcConfig = {
  authority: config.ssojet.authorityUrl,
  client_id: config.ssojet.clientId,
  redirect_uri: config.ssojet.redirectUri,
  post_logout_redirect_uri: config.ssojet.postLogoutRedirectUri,
  response_type: config.ssojet.responseType,
  scope: config.ssojet.scope.join(' '),
  automaticSilentRenew: config.ssojet.automaticSilentRenew,
  includeIdTokenInSilentRenew: config.ssojet.includeIdTokenInSilentRenew,
  loadUserInfo: config.ssojet.loadUserInfo,
  silent_redirect_uri: `${config.site.url}/login/silent-callback`,
  monitorSession: true,
  checkSessionInterval: config.security.tokenRenewalOffset * 1000,
  silentRequestTimeout: config.security.silentRenewTimeout,
  debug: config.debug.enabled,
};

export const userManager = new UserManager(oidcConfig);
