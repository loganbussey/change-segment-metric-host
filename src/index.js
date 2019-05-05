import xhrIntercept from '@loganbussey/xhr-intercept';

const metricsUrl = 'https://api.segment.io/v1/m';
const metricsHost = 'api.segment.io'

const initialize = (apiHost) => {
  if (!apiHost) {
    return;
  }

  xhrIntercept(metricsUrl, metricsUrl.replace(metricsHost, apiHost));

};

export default initialize;
