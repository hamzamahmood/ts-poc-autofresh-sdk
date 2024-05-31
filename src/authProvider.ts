/**
 * MdNotesCCGLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  compositeAuthenticationProvider,
  requestAuthenticationProvider,
  OAuthConfiguration,
} from './authentication';
import { ClientCredentialsAuthManager } from './clientCredentialsAuthManager';
import { Configuration } from './configuration';
import { OAuthToken } from './models/oAuthToken';

export function createAuthProviderFromConfig(
  config: Partial<Configuration>,
  httpCCG: () => ClientCredentialsAuthManager
) {
  const authConfig = {
    httpCCG:
      config.clientCredentialsAuthCredentials &&
      requestAuthenticationProvider (
        config.clientCredentialsAuthCredentials.oAuthToken,
        httpCCGTokenProvider(httpCCG, config.clientCredentialsAuthCredentials.oAuthTokenProvider),
        config.clientCredentialsAuthCredentials.oAuthOnTokenUpdate,
        {
          clockSkew: config.clientCredentialsAuthCredentials.clockSkew
        } as OAuthConfiguration
    ),
  };

  return compositeAuthenticationProvider <
    keyof typeof authConfig,
    typeof authConfig
  > (authConfig);
}

function httpCCGTokenProvider(
  httpCCG: () => ClientCredentialsAuthManager,
  defaultProvider: ((lastOAuthToken: OAuthToken | undefined,
    authManager: ClientCredentialsAuthManager) => Promise<OAuthToken>) | undefined
): ((token: OAuthToken | undefined) => Promise<OAuthToken>) | undefined {
  return (token: OAuthToken | undefined) => {
    const manager = httpCCG();
    if (defaultProvider === undefined) {
      return manager.updateToken(token);
    }
    return defaultProvider(token, manager);
  };
}

