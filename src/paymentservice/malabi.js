const malabi = require('malabi');
const instrumentationConfig = {
  serviceName: 'paymentservice',
};
malabi.instrument(instrumentationConfig);
malabi.serveMalabiFromHttpApp(18393, instrumentationConfig);