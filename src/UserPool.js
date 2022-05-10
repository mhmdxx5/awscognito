import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_fRlWDhavC',
  ClientId: '5pl1joaubollbdl6umqfqvah6m'
};

export default new CognitoUserPool(poolData);