
# OAuth 2 Client Credentials Grant



Documentation for accessing and setting credentials for httpCCG.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| OAuthClientId | `string` | OAuth 2 Client ID | `oAuthClientId` |
| OAuthClientSecret | `string` | OAuth 2 Client Secret | `oAuthClientSecret` |
| OAuthToken | `OAuthToken` | Object for storing information about the OAuth token | `oAuthToken` |
| OAuthScopes | `OAuthScopeEnum[]` | List of scopes that apply to the OAuth token | `oAuthScopes` |
| OAuthTokenProvider | `(lastOAuthToken: OAuthToken \| undefined, authManager: ClientCredentialsAuthManager) => Promise<OAuthToken>` | Registers a callback for oAuth Token Provider used for automatic token fetching/refreshing. | `oAuthTokenProvider` |
| OAuthOnTokenUpdate | `(token: OAuthToken) => void` | Registers a callback for token update event. | `oAuthOnTokenUpdate` |



**Note:** Auth credentials can be set using `clientCredentialsAuthCredentials` object in the client.

## Usage Example

### Client Initialization

You must initialize the client with *OAuth 2.0 Client Credentials Grant* credentials as shown in the following code snippet. This will fetch the OAuth token automatically when any of the endpoints, requiring *OAuth 2.0 Client Credentials Grant* autentication, are called.

```ts
const client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: 'OAuthClientId',
    oAuthClientSecret: 'OAuthClientSecret',
    oAuthScopes: [
      OAuthScopeEnum.ReadScope,
      OAuthScopeEnum.WriteScope
    ]
  },
});
```



Your application can also manually provide an OAuthToken using the setter `oAuthToken` in `clientCredentialsAuthCredentials` object. This function takes in an instance of OAuthToken containing information for authorizing client requests and refreshing the token itself.

You must have initialized the client with scopes for which you need permission to access.

### Scopes

Scopes enable your application to only request access to the resources it needs while enabling users to control the amount of access they grant to your application. Available scopes are defined in the [`OAuthScopeEnum`](../../doc/models/o-auth-scope-enum.md) enumeration.

| Scope Name | Description |
|  --- | --- |
| `ReadScope` | Read scope |
| `WriteScope` | Write scope |

### Adding OAuth Token Update Callback

Whenever the OAuth Token gets updated, the provided callback implementation will be executed. For instance, you may use it store your access token whenever it gets updated.

```ts
const client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: 'OAuthClientId',
    oAuthClientSecret: 'OAuthClientSecret',
    oAuthScopes: [
      OAuthScopeEnum.ReadScope,
      OAuthScopeEnum.WriteScope
    ],
    oAuthOnTokenUpdate: (token: OAuthToken) => {
      // Add the callback handler to perform operations like save to DB or file etc.
      // It will be triggered whenever the token gets updated
      console.log(token);
    }
  },
});
```

### Adding Custom OAuth Token Provider

To authorize a client from a stored access token, set up the `oAuthTokenProvider` in `clientCredentialsAuthCredentials` along with the other auth parameters before creating the client:

```ts
const client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: 'OAuthClientId',
    oAuthClientSecret: 'OAuthClientSecret',
    oAuthScopes: [
      OAuthScopeEnum.ReadScope,
      OAuthScopeEnum.WriteScope
    ],
    oAuthTokenProvider: (lastOAuthToken: OAuthToken | undefined, authManager: ClientCredentialsAuthManager) => {
      // Add the callback handler to provide a new OAuth token
      // It will be triggered whenever the lastOAuthToken is undefined or expired
      return Promise.resolve({
        ...lastOAuthToken,
        accessToken: 'new accessToken',
        expiry: BigInt(Date.now())
      });
    }
  },
});
```


