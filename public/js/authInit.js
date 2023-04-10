supertokens.init({
  enableDebugLogs: true,
  appInfo: {
    apiDomain: 'https://wellcal.onrender.com',
    apiBasePath: 'api/auth',
    appName: 'wellcal',
  },
  recipeList: [supertokensSession.init(), supertokensThirdParty.init()],
});
