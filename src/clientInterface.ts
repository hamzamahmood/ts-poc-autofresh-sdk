/**
 * MdNotesCCGLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { createAuthProviderFromConfig } from './authProvider';
import { AuthenticatorInterface, RequestBuilderFactory } from './core';

export interface ClientInterface {
  getRequestBuilderFactory(): SdkRequestBuilderFactory;
}

export type SdkRequestBuilderFactory = RequestBuilderFactory<
  Server,
  AuthParams
>;

export type SdkRequestBuilder = ReturnType<SdkRequestBuilderFactory>;

export type Server = 'default' | 'auth';

export type AuthParams = ReturnType<typeof createAuthProviderFromConfig> extends AuthenticatorInterface<infer X> ? X : never;
