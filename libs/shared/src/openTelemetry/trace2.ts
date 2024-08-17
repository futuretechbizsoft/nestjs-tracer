// // tracing.ts
// 'use strict';

// import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
// import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
// import { Resource } from '@opentelemetry/resources';
// import * as opentelemetry from '@opentelemetry/sdk-node';
// import { SEMRESATTRS_SERVICE_NAME } from '@opentelemetry/semantic-conventions';

// // Add otel logging when debugging
// import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api';
// diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG);

// // do not set headers in exporterOptions, the OTel spec recommends setting headers through ENV variables
// // https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#specifying-headers-via-environment-variables

// const init = (serviceName: any, environment: any) => {
//     const exporterOptions = {
//         url: 'http://localhost:4318/v1/traces',
//         // headers: { 'signoz-access-token': 'your SigNoz Cloud ingestion key' }, // Use if you are using SigNoz Cloud
//     };

//     console.log('HELLLLLLLLLLLLLLLLl', serviceName, environment);

//     const traceExporter = new OTLPTraceExporter(exporterOptions);
//     const sdk = new opentelemetry.NodeSDK({
//         traceExporter,
//         instrumentations: [getNodeAutoInstrumentations()],
//         resource: new Resource({
//             [SEMRESATTRS_SERVICE_NAME]: '<service_name_yes>',
//         }),
//     });

//     // initialize the SDK and register with the OpenTelemetry API
//     // this enables the API to record telemetry
//     sdk.start();

//     // gracefully shut down the SDK on process exit
//     process.on('SIGTERM', () => {
//         sdk.shutdown()
//             .then(() => console.log('Tracing terminated'))
//             .catch((error) => console.log('Error terminating tracing', error))
//             .finally(() => process.exit(0));
//     });
// };

// export default init;

// // 'use strict';

// // import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
// // import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
// // import { Resource } from '@opentelemetry/resources';
// // import * as opentelemetry from '@opentelemetry/sdk-node';
// // import { SEMRESATTRS_SERVICE_NAME } from '@opentelemetry/semantic-conventions';

// // export function createSdk(otlpUrl) {
// //     const exporterOptions = {
// //         url: otlpUrl,
// //     };

// //     console.log('BENCHOD', exporterOptions);

// //     const traceExporter = new OTLPTraceExporter(exporterOptions);
// //     const sdk = new opentelemetry.NodeSDK({
// //         traceExporter,
// //         instrumentations: [getNodeAutoInstrumentations()],
// //         resource: new Resource({
// //             [SEMRESATTRS_SERVICE_NAME]: '<service_name>',
// //         }),
// //     });

// //     // Initialize the SDK and register with the OpenTelemetry API
// //     sdk.start();

// //     // Gracefully shut down the SDK on process exit
// //     process.on('SIGTERM', () => {
// //         sdk.shutdown()
// //             .then(() => console.log('Tracing terminated'))
// //             .catch((error) => console.log('Error terminating tracing', error))
// //             .finally(() => process.exit(0));
// //     });
// // }

// // // // Pass the desired URL dynamically
// // // const sdk = createSdk(process.env.OTLP_TRACE_URL || 'http://localhost:4318/v1/traces');

// // // // Initialize the SDK and register with the OpenTelemetry API
// // // sdk.start();

// // // // Gracefully shut down the SDK on process exit
// // // process.on('SIGTERM', () => {
// // //     sdk.shutdown()
// // //         .then(() => console.log('Tracing terminated'))
// // //         .catch((error) => console.log('Error terminating tracing', error))
// // //         .finally(() => process.exit(0));
// // // });

// // // export default sdk;
