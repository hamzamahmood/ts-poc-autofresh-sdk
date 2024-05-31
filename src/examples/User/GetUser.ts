import {
  Client,
  UserController,
} from '../../../src';

const client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: '23',
    oAuthClientSecret: 'tQNSqQlXBIwZcY9auoujQ57ckDcoh3t8UPbBRkSF',
    clockSkew: 3600,
  },
  timeout: 0,
});

const userController = new UserController(client);

getUsers();

async function getUsers() {
  try {
    const result = await userController.getUser();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
