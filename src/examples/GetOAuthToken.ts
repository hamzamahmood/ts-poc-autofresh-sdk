import {
    Client,
  } from '../../src';

const client = new Client({
    clientCredentialsAuthCredentials: {
      oAuthClientId: '23',
      oAuthClientSecret: 'tQNSqQlXBIwZcY9auoujQ57ckDcoh3t8UPbBRkSF',
      oAuthConfiguration: {
        clockSkew: 3600,
      }
    },
    timeout: 0,
});
  
  
testOAuthToken();

function testOAuthToken(){
   client.clientCredentialsAuthManager.fetchToken()
    .then(oAuthToken  => {
        // Handle the result here
        console.log(oAuthToken);
        console.log('-----------\n');
        console.log(client.clientCredentialsAuthManager.isExpired(oAuthToken));
    })
}