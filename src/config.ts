import ThirdParty from 'supertokens-node/recipe/thirdparty';
import Session from 'supertokens-node/recipe/session';
import Dashboard from 'supertokens-node/recipe/dashboard';

export const appInfo = {
  // Learn more about this on https://supertokens.com/docs/thirdpartypasswordless/appinfo
  appName: 'wellcal',
  apiDomain: 'http://localhost:3000',
  websiteDomain: 'http://localhost:3000',
  apiBasePath: '/api/auth',
  websiteBasePath: '/auth',
};

export const connectionUri =
  'https://dev-73c9c251d63011ed91c2157b3f912564-eu-west-1.aws.supertokens.io:3568';
export const apiKey = 'ztlyRlFRzP-s-FHRZq0queBvd4Jt7B';

export const recipeList = [
  ThirdParty.init({
    signInAndUpFeature: {
      providers: [
        // We have provided you with development keys which you can use for testing.
        // IMPORTANT: Please replace them with your own OAuth keys for production use.
        ThirdParty.Google({
          clientId:
            '1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com',
          clientSecret: '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',
        }),
      ],
    },
  }),
  Session.init(),
  Dashboard.init(),
];
