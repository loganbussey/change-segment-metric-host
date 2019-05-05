# Segment Metrics API Host Changer

When changing the Segment `apiHost` to point to a proxy using the integration options on the `analytics.load()` call, `identify`, `page`, `track`, and `screen` calls will be made to your proxy, but Segment's internal metric calls will still be made to `api.segment.io`. There's no way to pass in a different metrics host and you would usually have to contact their support team to ask them to change the tracking code loaded by the snippet. This small script intercepts XHR requests and modifies the URL of metric calls to go through your proxy instead.

E.g. When using the following code to change the `apiHost`,

```js
analytics.load("yourWriteKey", {
  integrations: {
    "Segment.io": {
      apiHost: "segment.example.com/v1",
    },
  },
});
```

## Installation & Usage

### NPM
```sh
$ npm install @loganbussey/change-segment-metric-host --save
```

```js
import changeMetricHost from '@loganbussey/change-segment-metric-host';

changeMetricHost('api.example.com');
```
