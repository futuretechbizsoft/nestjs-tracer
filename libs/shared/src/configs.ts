export default {
    serviceName: 'my-service',
    monitoring: {
        otlpEndpoint: 'http://localhost:4318/v1/traces',
        zipkinEndpoint: 'http://localhost:9411/api/v2/spans',
        serviceName: 'my-service',
    },
};
