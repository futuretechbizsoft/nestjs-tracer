// // import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
// // import { NodeSDK } from '@opentelemetry/sdk-node';
// // import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
// // import { Resource } from '@opentelemetry/resources';
// // import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
// // import { SEMRESATTRS_SERVICE_NAME } from '@opentelemetry/semantic-conventions';

// // export class OpenTelemetryOptions {
// //     otlpEndpoint?: string;
// //     jaegerEndpoint?: string;
// //     zipkinEndpoint?: string;
// //     serviceName: string;

// //     constructor(partial?: Partial<OpenTelemetryOptions>) {
// //         Object.assign(this, partial);
// //     }
// // }

// // @Injectable()
// // export class OpenTelemetryTracer implements OnModuleInit, OnModuleDestroy {
// //     private sdk: NodeSDK;
// //     private isInitialized = false;

// //     constructor(private readonly options: OpenTelemetryOptions) {
// //         console.log('OpenTelemetryTracer instance created with options:', options);
// //         if (!this.isInitialized) {
// //             this.initTracer();
// //         }
// //     }

// //     private initTracer() {
// //         const exporterOptions = {
// //             url: this.options.otlpEndpoint || 'http://localhost:4318/v1/traces',
// //         };

// //         console.log('fdfdfdsf', this.options.serviceName);

// //         const traceExporter = new OTLPTraceExporter(exporterOptions);
// //         this.sdk = new NodeSDK({
// //             traceExporter,
// //             instrumentations: [getNodeAutoInstrumentations()],
// //             resource: new Resource({
// //                 [SEMRESATTRS_SERVICE_NAME]: this.options.serviceName || 'default-service',
// //             }),
// //         });
// //     }

// //     async onModuleInit(): Promise<void> {
// //         if (!this.isInitialized) {
// //             console.log('Starting OpenTelemetry SDK...');
// //             await this.sdk.start();
// //             this.isInitialized = true;
// //             console.log('OpenTelemetry SDK started successfully.');
// //         }
// //     }

// //     async onModuleDestroy(): Promise<void> {
// //         console.log('Shutting down OpenTelemetry SDK...');
// //         await this.sdk.shutdown();
// //         console.log('OpenTelemetry SDK shut down gracefully.');
// //     }
// // }
// // import init from './trace';

// import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
// // import { BatchSpanProcessor, NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
// // import { ZipkinExporter } from '@opentelemetry/exporter-zipkin';
// // import { AmqplibInstrumentation } from '@opentelemetry/instrumentation-amqplib';
// // import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
// import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
// // import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
// // import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
// // import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
// import { Resource } from '@opentelemetry/resources';
// import { SEMRESATTRS_SERVICE_NAME } from '@opentelemetry/semantic-conventions';
// import { trace, Tracer } from '@opentelemetry/api';
// import configs from '../configs';
// // import sdk from './trace';
// // import { NodeSDK } from '@opentelemetry/sdk-node';
// import * as opentelemetry from '@opentelemetry/sdk-node';
// import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
// // import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api';
// // diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG);
// // import process from 'process';

// export class OpenTelemetryOptions {
//     otlpEndpoint?: string;
//     jaegerEndpoint?: string;
//     zipkinEndpoint?: string;
//     serviceName: string;

//     constructor(partial?: Partial<OpenTelemetryOptions>) {
//         Object.assign(this, partial);
//     }
// }

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// let openTelemetryOptions: OpenTelemetryOptions = new OpenTelemetryOptions();

// let otelSDK;

// async function initSdk() {
//     const exporterOptions = {
//         url: 'http://localhost:4318/v1/traces',
//     };

//     console.log(
//         'exporterOptionsexporterOptionsexporterOptions',
//         exporterOptions,
//         openTelemetryOptions,
//         'ad'
//     );

//     const traceExporter = new OTLPTraceExporter(exporterOptions);
//     const sdk = new opentelemetry.NodeSDK({
//         traceExporter,
//         instrumentations: [getNodeAutoInstrumentations()],
//         resource: new Resource({
//             [SEMRESATTRS_SERVICE_NAME]: '<service_name_yes_no_again_yes>',
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

//     return sdk;
// }
// //     return sdk;

// //     // const provider = new NodeTracerProvider({
// //     //     resource: new Resource({
// //     //         [SEMRESATTRS_SERVICE_NAME]: openTelemetryOptions?.serviceName ?? configs.serviceName,
// //     //     }),
// //     // });

// //     // const zipkinExporter = new ZipkinExporter({
// //     //     url: openTelemetryOptions?.zipkinEndpoint ?? configs.monitoring.zipkinEndpoint,
// //     //     serviceName: openTelemetryOptions?.serviceName ?? configs.serviceName,
// //     // });

// //     // // Choose either OTLP HTTP or OTLP gRPC
// //     // const otlpExporter = new OTLPTraceExporter({
// //     //     url: openTelemetryOptions?.otlpEndpoint ?? configs.monitoring.otlpEndpoint,
// //     // });

// //     // // provider.addSpanProcessor(new SimpleSpanProcessor(jaegerExporter));
// //     // provider.addSpanProcessor(
// //     //     new BatchSpanProcessor(otlpExporter, {
// //     //         maxQueueSize: 10000, // Adjust based on throughput
// //     //         scheduledDelayMillis: 5000, // Delay before sending batches
// //     //     })
// //     // );

// //     // provider.addSpanProcessor(
// //     //     new BatchSpanProcessor(zipkinExporter, {
// //     //         maxQueueSize: 10000, // Adjust based on throughput
// //     //         scheduledDelayMillis: 5000, // Delay before sending batches
// //     //     })
// //     // );

// //     // provider.register();

// //     // return new NodeSDK({
// //     //     resource: provider.resource,
// //     //     spanProcessor: provider.activeSpanProcessor,
// //     //     instrumentations: [
// //     //         new HttpInstrumentation(),
// //     //         new ExpressInstrumentation(),
// //     //         new NestInstrumentation(),
// //     //         new AmqplibInstrumentation(),
// //     //     ],
// //     // });
// // }

// export interface IOpenTelemetryTracer {
//     createTracer(options: OpenTelemetryOptions): Promise<Tracer>;
// }

// @Injectable()
// export class OpenTelemetryTracer implements IOpenTelemetryTracer, OnModuleInit {
//     private sdk: opentelemetry.NodeSDK;

//     constructor(@Inject(OpenTelemetryOptions) private readonly options: OpenTelemetryOptions) {
//         console.log('JJJJ', this.options);
//         openTelemetryOptions = this.options;
//         otelSDK = initSdk();
//     }
//     async onModuleInit(): Promise<void> {
//         console.log('Start SDK');
//         // createSdk('http://localhost:4318/v1/traces');
//         // init('lina', 'dhgarmesh');
//         // await sdk.start();
//         (await otelSDK).start();
//         // console.log('process.envprocess.envprocess.envprocess.env', process.env);
//         // const abc = initSdk();
//         // (await abc).start();
//         // this.sdk = await initSdk('default-url');
//         // this.sdk.start();
//         // this.sdk = await initSdk(this.options);
//         // // this.sdk.start(); // Start SDK
//         // // Start the SDK
//         // try {
//         //     await this.sdk.start();
//         //     console.log('SDK Started');
//         // } catch (error) {
//         //     console.error('Error starting SDK:', error);
//         // }
//         console.log('Start SDK 1');
//     }

//     async createTracer(options: OpenTelemetryOptions): Promise<Tracer> {
//         console.log('JJJJ', options);
//         const tracer = trace.getTracer(options?.serviceName ?? configs.serviceName);
//         return tracer;
//     }
// }

// // import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
// // import { BatchSpanProcessor, NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
// // import { ZipkinExporter } from '@opentelemetry/exporter-zipkin';
// // import { AmqplibInstrumentation } from '@opentelemetry/instrumentation-amqplib';
// // // import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
// // import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
// // import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
// // import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
// // import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
// // import { Resource } from '@opentelemetry/resources';
// // import { SEMRESATTRS_SERVICE_NAME } from '@opentelemetry/semantic-conventions';
// // import { trace, Tracer } from '@opentelemetry/api';
// // import configs from '../configs';
// // import { NodeSDK } from '@opentelemetry/sdk-node';

// // export class OpenTelemetryOptions {
// //     otlpEndpoint?: string;
// //     jaegerEndpoint?: string;
// //     zipkinEndpoint?: string;
// //     serviceName: string;

// //     constructor(partial?: Partial<OpenTelemetryOptions>) {
// //         Object.assign(this, partial);
// //     }
// // }

// // let openTelemetryOptions: OpenTelemetryOptions = new OpenTelemetryOptions();

// // const otelSDK = initSdk();

// // async function initSdk() {
// //     const provider = new NodeTracerProvider({
// //         resource: new Resource({
// //             [SEMRESATTRS_SERVICE_NAME]: openTelemetryOptions?.serviceName ?? configs.serviceName,
// //         }),
// //     });

// //     const zipkinExporter = new ZipkinExporter({
// //         url: openTelemetryOptions?.zipkinEndpoint ?? configs.monitoring.zipkinEndpoint,
// //         serviceName: openTelemetryOptions?.serviceName ?? configs.serviceName,
// //     });

// //     // Choose either OTLP HTTP or OTLP gRPC
// //     const otlpExporter = new OTLPTraceExporter({
// //         url: openTelemetryOptions?.otlpEndpoint ?? configs.monitoring.otlpEndpoint,
// //     });

// //     // provider.addSpanProcessor(new SimpleSpanProcessor(jaegerExporter));
// //     provider.addSpanProcessor(
// //         new BatchSpanProcessor(otlpExporter, {
// //             maxQueueSize: 10000, // Adjust based on throughput
// //             scheduledDelayMillis: 5000, // Delay before sending batches
// //         })
// //     );

// //     provider.addSpanProcessor(
// //         new BatchSpanProcessor(zipkinExporter, {
// //             maxQueueSize: 10000, // Adjust based on throughput
// //             scheduledDelayMillis: 5000, // Delay before sending batches
// //         })
// //     );

// //     provider.register();

// //     return new NodeSDK({
// //         resource: provider.resource,
// //         spanProcessor: provider.activeSpanProcessor,
// //         instrumentations: [
// //             new HttpInstrumentation(),
// //             new ExpressInstrumentation(),
// //             new NestInstrumentation(),
// //             new AmqplibInstrumentation(),
// //         ],
// //     });
// // }

// // export interface IOpenTelemetryTracer {
// //     createTracer(options: OpenTelemetryOptions): Promise<Tracer>;
// // }

// // @Injectable()
// // export class OpenTelemetryTracer implements IOpenTelemetryTracer, OnModuleInit {
// //     constructor(@Inject(OpenTelemetryOptions) private readonly options: OpenTelemetryOptions) {
// //         openTelemetryOptions = this.options;
// //     }
// //     async onModuleInit(): Promise<void> {
// //         (await otelSDK).start();
// //     }

// //     async createTracer(options: OpenTelemetryOptions): Promise<Tracer> {
// //         const tracer = trace.getTracer(options?.serviceName ?? configs.serviceName);
// //         return tracer;
// //     }
// // }

// // import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
// // import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
// // import { NodeSDK } from '@opentelemetry/sdk-node';
// // import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
// // import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
// // import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
// // import { ZipkinExporter } from '@opentelemetry/exporter-zipkin';
// // import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-base';
// // import { Resource } from '@opentelemetry/resources';
// // import { SEMRESATTRS_SERVICE_NAME } from '@opentelemetry/semantic-conventions';

// // export class OpenTelemetryOptions {
// //     zipkinEndpoint?: string;
// //     serviceName: string;
// //     constructor(partial?: Partial<OpenTelemetryOptions>) {
// //         Object.assign(this, partial);
// //     }
// // }

// // @Injectable()
// // export class OpenTelemetryTracer implements OnModuleInit {
// //     constructor(@Inject(OpenTelemetryOptions) private readonly options: OpenTelemetryOptions) {}

// //     async onModuleInit(): Promise<void> {
// //         console.log('Starting OpenTelemetry SDK...');
// //         await this.initSdk();
// //         console.log('OpenTelemetry SDK started.');
// //     }

// //     private async initSdk() {
// //         const provider = new NodeTracerProvider({
// //             resource: new Resource({
// //                 [SEMRESATTRS_SERVICE_NAME]: this.options.serviceName,
// //             }),
// //         });

// //         const zipkinExporter = new ZipkinExporter({
// //             url: this.options.zipkinEndpoint,
// //         });

// //         provider.addSpanProcessor(new BatchSpanProcessor(zipkinExporter));
// //         provider.register();

// //         console.log('OpenTelemetry options:', this.options);

// //         const sdk = new NodeSDK({
// //             resource: provider.resource,
// //             spanProcessor: provider.activeSpanProcessor,
// //             instrumentations: [
// //                 new HttpInstrumentation(),
// //                 new ExpressInstrumentation(),
// //                 new NestInstrumentation(),
// //             ],
// //         });

// //         sdk.start();
// //     }
// // }

// // import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
// // import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
// // import { ZipkinExporter } from '@opentelemetry/exporter-zipkin';
// // import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-base';
// // import { Resource } from '@opentelemetry/resources';
// // import { SEMRESATTRS_SERVICE_NAME } from '@opentelemetry/semantic-conventions';
// // // import { trace } from '@opentelemetry/api';
// // import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
// // import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
// // import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
// // import { NodeSDK } from '@opentelemetry/sdk-node';

// // export class OpenTelemetryOptions {
// //     otlpEndpoint?: string;
// //     zipkinEndpoint?: string;
// //     serviceName: string;
// //     constructor(partial?: Partial<OpenTelemetryOptions>) {
// //         Object.assign(this, partial);
// //     }
// // }

// // let openTelemetryOptions: OpenTelemetryOptions = new OpenTelemetryOptions();

// // @Injectable()
// // export class OpenTelemetryTracer implements OnModuleInit {
// //     constructor(@Inject(OpenTelemetryOptions) private readonly options: OpenTelemetryOptions) {
// //         openTelemetryOptions = this.options;
// //     }

// //     async onModuleInit(): Promise<void> {
// //         console.log('Starting OpenTelemetry SDK...');
// //         await this.initSdk();
// //         console.log('OpenTelemetry SDK started.');
// //     }

// //     private async initSdk() {
// //         const provider = new NodeTracerProvider({
// //             resource: new Resource({
// //                 [SEMRESATTRS_SERVICE_NAME]: 'my-service',
// //             }),
// //         });

// //         const zipkinExporter = new ZipkinExporter({
// //             url: 'http://localhost:9411/api/v2/spans',
// //         });

// //         console.log('asdsd', openTelemetryOptions.serviceName);

// //         provider.addSpanProcessor(new BatchSpanProcessor(zipkinExporter));
// //         provider.register();

// //         console.log('OpenTelemetry options:', this.options);

// //         const sdk = new NodeSDK({
// //             resource: provider.resource,
// //             spanProcessor: provider.activeSpanProcessor,
// //             instrumentations: [
// //                 new HttpInstrumentation(),
// //                 new ExpressInstrumentation(),
// //                 new NestInstrumentation(),
// //                 // new AmqplibInstrumentation(),
// //             ],
// //         });

// //         sdk.start();

// //         // const provider = new NodeTracerProvider({
// //         //     resource: new Resource({
// //         //         [SEMRESATTRS_SERVICE_NAME]: 'my-service',
// //         //     }),
// //         // });

// //         // const zipkinExporter = new ZipkinExporter({
// //         //     url: 'http://localhost:9411/api/v2/spans', // Zipkin endpoint
// //         //     serviceName: 'my-service', // Ensure service name is correctly set
// //         // });

// //         // console.log('asdsd', openTelemetryOptions.serviceName);

// //         // provider.addSpanProcessor(new BatchSpanProcessor(zipkinExporter));

// //         // provider.register();

// //         // const sdk = new NodeSDK({
// //         //     resource: provider.resource,
// //         //     spanProcessor: provider.activeSpanProcessor,
// //         //     instrumentations: [
// //         //         new HttpInstrumentation(),
// //         //         new ExpressInstrumentation(),
// //         //         new NestInstrumentation(),
// //         //         // new AmqplibInstrumentation(),
// //         //     ],
// //         // });

// //         // sdk.start();
// //     }
// // }

// // import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
// // import { BatchSpanProcessor, NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
// // import { ZipkinExporter } from '@opentelemetry/exporter-zipkin';
// // import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto';
// // import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
// // import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
// // import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
// // import { AmqplibInstrumentation } from '@opentelemetry/instrumentation-amqplib';
// // import { Resource } from '@opentelemetry/resources';
// // import { SEMRESATTRS_SERVICE_NAME } from '@opentelemetry/semantic-conventions';
// // import { NodeSDK } from '@opentelemetry/sdk-node';

// // export class OpenTelemetryOptions {
// //     otlpEndpoint?: string;
// //     zipkinEndpoint?: string;
// //     serviceName: string;
// //     constructor(partial?: Partial<OpenTelemetryOptions>) {
// //         Object.assign(this, partial);
// //     }
// // }

// // let openTelemetryOptions: OpenTelemetryOptions = new OpenTelemetryOptions();

// // @Injectable()
// // export class OpenTelemetryTracer implements OnModuleInit {
// //     constructor(@Inject(OpenTelemetryOptions) private readonly options: OpenTelemetryOptions) {
// //         openTelemetryOptions = this.options;
// //     }

// //     async onModuleInit(): Promise<void> {
// //         console.log('Starting OpenTelemetry SDK...');
// //         await this.initSdk();
// //         console.log('OpenTelemetry SDK started.');
// //     }

// //     private async initSdk() {
// //         const provider = new NodeTracerProvider({
// //             resource: new Resource({
// //                 [SEMRESATTRS_SERVICE_NAME]: openTelemetryOptions.serviceName,
// //             }),
// //         });

// //         const otlpExporter = new OTLPTraceExporter({
// //             url: openTelemetryOptions.otlpEndpoint ?? 'http://localhost:4318/v1/traces',
// //         });

// //         console.log('asa', openTelemetryOptions.otlpEndpoint ?? 'http://localhost:4318/v1/traces');

// //         const zipkinExporter = new ZipkinExporter({
// //             url: openTelemetryOptions.zipkinEndpoint ?? 'http://localhost:9412/api/v2/spans',
// //             serviceName: openTelemetryOptions.serviceName,
// //         });

// //         console.log(
// //             'asdsd',
// //             openTelemetryOptions.zipkinEndpoint ?? 'http://localhost:9412/api/v2/spans',
// //             openTelemetryOptions.serviceName
// //         );

// //         provider.addSpanProcessor(new BatchSpanProcessor(otlpExporter));
// //         provider.addSpanProcessor(new BatchSpanProcessor(zipkinExporter));

// //         provider.register();

// //         const sdk = new NodeSDK({
// //             resource: provider.resource,
// //             spanProcessor: provider.activeSpanProcessor,
// //             instrumentations: [
// //                 new HttpInstrumentation(),
// //                 new ExpressInstrumentation(),
// //                 new NestInstrumentation(),
// //                 new AmqplibInstrumentation(),
// //             ],
// //         });

// //         sdk.start();
// //     }
// // }

// // import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
// // import { BatchSpanProcessor, NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
// // import { ZipkinExporter } from '@opentelemetry/exporter-zipkin';
// // import { AmqplibInstrumentation } from '@opentelemetry/instrumentation-amqplib';
// // import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
// // import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
// // import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
// // import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
// // import { Resource } from '@opentelemetry/resources';
// // import { SEMRESATTRS_SERVICE_NAME } from '@opentelemetry/semantic-conventions';
// // // import { JaegerExporter } from '@opentelemetry/exporter-jaeger';
// // import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto';
// // import { trace, Tracer } from '@opentelemetry/api';
// // import configs from '../configs';
// // import { NodeSDK } from '@opentelemetry/sdk-node';

// // export class OpenTelemetryOptions {
// //     otlpEndpoint?: string;
// //     jaegerEndpoint?: string;
// //     zipkinEndpoint?: string;
// //     serviceName: string;
// //     constructor(partial?: Partial<OpenTelemetryOptions>) {
// //         Object.assign(this, partial);
// //     }
// // }

// // let openTelemetryOptions: OpenTelemetryOptions = new OpenTelemetryOptions();

// // const otelSDK = initSdk();

// // async function initSdk() {
// //     console.log('Initializing OpenTelemetry SDK...');

// //     const provider = new NodeTracerProvider({
// //         resource: new Resource({
// //             [SEMRESATTRS_SERVICE_NAME]: openTelemetryOptions?.serviceName ?? configs.serviceName,
// //         }),
// //     });

// //     // const jaegerExporter = new JaegerExporter({
// //     //     endpoint: openTelemetryOptions?.jaegerEndpoint ?? configs.monitoring.jaegerEndpoint,
// //     // });

// //     const otlpprotoExporter = new OTLPTraceExporter({
// //         url: 'http://localhost:4318/v1/traces', // url is optional and can be omitted - default is http://localhost:4318/v1/traces
// //         headers: { foo: 'bar' },
// //     });

// //     const zipkinExporter = new ZipkinExporter({
// //         url: openTelemetryOptions?.zipkinEndpoint ?? configs.monitoring.zipkinEndpoint,
// //         serviceName: openTelemetryOptions?.serviceName ?? configs.serviceName,
// //     });

// //     // provider.addSpanProcessor(new SimpleSpanProcessor(jaegerExporter));
// //     provider.addSpanProcessor(new SimpleSpanProcessor(otlpprotoExporter));

// //     provider.addSpanProcessor(new BatchSpanProcessor(zipkinExporter));

// //     provider.register();

// //     console.log('OpenTelemetry SDK initialized.');

// //     return new NodeSDK({
// //         resource: provider.resource,
// //         spanProcessor: provider.activeSpanProcessor,
// //         instrumentations: [
// //             new HttpInstrumentation(),
// //             new ExpressInstrumentation(),
// //             new NestInstrumentation(),
// //             new AmqplibInstrumentation(),
// //         ],
// //     });
// // }

// // export interface IOpenTelemetryTracer {
// //     createTracer(options: OpenTelemetryOptions): Promise<Tracer>;
// // }

// // @Injectable()
// // export class OpenTelemetryTracer implements IOpenTelemetryTracer, OnModuleInit {
// //     constructor(@Inject(OpenTelemetryOptions) private readonly options: OpenTelemetryOptions) {
// //         openTelemetryOptions = this.options;
// //     }
// //     async onModuleInit(): Promise<void> {
// //         console.log('Starting OpenTelemetry SDK...');
// //         (await otelSDK).start();
// //         console.log('OpenTelemetry SDK started.');
// //     }

// //     async createTracer(options: OpenTelemetryOptions): Promise<Tracer> {
// //         const tracer = trace.getTracer(options?.serviceName ?? configs.serviceName);
// //         console.log('Tracer created:', tracer);
// //         return tracer;
// //     }
// // }
