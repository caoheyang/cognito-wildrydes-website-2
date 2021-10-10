// This file is used for manual configuration of the Amplify library.
// When Amplify is used in conjunction with the Amplify CLI toolchain or AWS Mobile Hub to manage backend resources,
// an aws-exports.js file is auto-generated and can be used instead of the below to automatically configure the Amplify library.
// In this workshop, we are using the Amplify client libraries without the CLI toolchain so you should edit this file manually.

const awsConfig = {
  Auth: {
      //identityPoolId: 'ap-southeast-1:6e9486a8-3a66-4c72-bb88-3cc718bda154', // example: 'us-east-2:c85f3c18-05fd-4bb5-8fd1-e77e7627a99e'
      region: 'ap-northeast-1', // example: 'us-east-2'
      userPoolId: 'ap-northeast-1_aOPKI1UgQ', // example: 'us-east-2_teEUQbkUh'
      userPoolWebClientId: '4vpvum21lk9bmkut4aothjebog', // example: '3k09ptd8kn8qk2hpk07qopr86'

      oauth: {
        domain: "heyang20211010.auth.ap-northeast-1.amazoncognito.com",
        scope: [
          "phone",
          "email",
          "profile",
          "openid",
          "aws.cognito.signin.user.admin",
        ],
        redirectSignIn: "http://localhost:4000",
        redirectSignOut: "http://localhost:4000",
        responseType: "token", // or 'token', note that REFRESH token will only be generated when the responseType is code
      },
  },
  API: {
      endpoints: [
          {
              name: 'WildRydesAPI',
              endpoint: 'https://cq4lm8igil.execute-api.ap-northeast-1.amazonaws.com/prod', // example: 'https://u8swuvl00f.execute-api.us-east-2.amazonaws.com/prod'
              region: 'ap-northeast-1' // example: 'us-east-2'
          }
      ]
  }
}

export default awsConfig;
