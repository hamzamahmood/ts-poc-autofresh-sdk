import {
  ApiError,
  Client,
  OAuthScopeEnum,
  ServiceController,
} from '../../../src';

const client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: 'OAuthClientId',
    oAuthClientSecret: 'OAuthClientSecret',
    oAuthScopes: [
      OAuthScopeEnum.ReadScope,
      OAuthScopeEnum.WriteScope
    ]
  },
  timeout: 0,
});

const serviceController = new ServiceController(client);

async () => {
  try {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { result, ...httpResponse } = await serviceController.getStatus();
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
