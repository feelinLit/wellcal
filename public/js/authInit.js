supertokens.init({
  enableDebugLogs: true,
  appInfo: {
    apiDomain: 'http://localhost:3000',
    apiBasePath: 'api/auth',
    appName: 'wellcal',
  },
  recipeList: [supertokensSession.init(), supertokensThirdParty.init()],
});
