import {
  ApiError,
  Client,
  OAuthScopeEnum,
  UserController,
} from '../../../src';

const client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: 'OAuthClientId',
    oAuthClientSecret: 'OAuthClientSecret',
    oAuthToken: {
      accessToken: 'AccessToken',
      tokenType: 'SandboxToken',
      expiresIn: BigInt(3600),
      refreshToken: 'RefreshToken',
    },
    oAuthScopes: [
      OAuthScopeEnum.ReadScope,
      OAuthScopeEnum.WriteScope
    ]
  },
  timeout: 0,
});

const userController = new UserController(client);

async () => {
  try {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { result, ...httpResponse } = await userController.getUser();
    // Get more response info...
    // const { statusCode, headers } = httpResponse;
  } catch (error) {
    if (error instanceof ApiError) {
      // @ts-expect-error: unused variables
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const errors = error.result;
      // const { statusCode, headers } = error;
    }
  }
};
