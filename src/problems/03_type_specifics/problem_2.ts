function getConfig(env: 'TEST' | 'DEV' | 'PROD') {
  const config = {
    TEST: 'testing',
    DEV: 'devving',
    PROD: 'prodding',
  };
  return config[env];
}

const prodConfig = getConfig('PROD');
const devConfig = getConfig('DEV');
const testConfig = getConfig('TEST');
