import {
  Client,
  ServiceController,
} from '../../../src';

const client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: '23',
    oAuthClientSecret: 'tQNSqQlXBIwZcY9auoujQ57ckDcoh3t8UPbBRkSF',
    clockSkew: 3600,
  },
  timeout: 0,
});

const serviceController = new ServiceController(client);

getStatus();

async function getStatus() {
  try {
    const result = await serviceController.getStatus();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
