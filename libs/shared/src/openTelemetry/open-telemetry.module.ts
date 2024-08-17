// import { DynamicModule, Global, Module, OnApplicationShutdown } from '@nestjs/common';
// import { OpenTelemetryOptions, OpenTelemetryTracer } from './open-telemetry-tracer';

// @Global()
// @Module({})
// export class OpenTelemetryModule implements OnApplicationShutdown {
//     static forRoot(options?: OpenTelemetryOptions): DynamicModule {
//         return {
//             module: OpenTelemetryModule,
//             providers: [
//                 {
//                     provide: OpenTelemetryOptions,
//                     useValue: options,
//                 },
//                 {
//                     provide: 'IOpenTelemetryTracer',
//                     useFactory: (opts: OpenTelemetryOptions) => new OpenTelemetryTracer(opts),
//                     inject: [OpenTelemetryOptions],
//                 },
//             ],
//             exports: ['IOpenTelemetryTracer'],
//         };
//     }

//     async onApplicationShutdown(signal?: string) {
//         console.log('SIGNAL FROM OpenTelemetryModule - onApplicationShutdown', signal);
//     }
// }

// // import { DynamicModule, Global, Module, OnApplicationShutdown } from '@nestjs/common';
// // import { OpenTelemetryOptions, OpenTelemetryTracer } from './open-telemetry-tracer';
// // @Global()
// // @Module({
// //     providers: [
// //         {
// //             provide: 'IOpenTelemetryTracer',
// //             useClass: OpenTelemetryTracer,
// //         },
// //     ],
// //     exports: ['IOpenTelemetryTracer'],
// // })
// // export class OpenTelemetryModule implements OnApplicationShutdown {
// //     async onApplicationShutdown(signal?: string) {
// //         console.log('SIGNAL FROM OpenTelemetryModule - onApplicationShutdown', signal);
// //     }

// //     static forRoot(options?: OpenTelemetryOptions): DynamicModule {
// //         return {
// //             module: OpenTelemetryModule,
// //             providers: [OpenTelemetryTracer, { provide: OpenTelemetryOptions, useValue: options }],
// //         };
// //     }
// // }

// // import { DynamicModule, Global, Module, OnApplicationShutdown } from '@nestjs/common';
// // import { OpenTelemetryOptions, OpenTelemetryTracer } from './open-telemetry-tracer';
// // @Global()
// // @Module({
// //     providers: [
// //         {
// //             provide: 'IOpenTelemetryTracer',
// //             useClass: OpenTelemetryTracer,
// //         },
// //     ],
// //     exports: ['IOpenTelemetryTracer'],
// // })
// // export class OpenTelemetryModule implements OnApplicationShutdown {
// //     async onApplicationShutdown(signal?: string) {
// //         console.log('SIGNAL FROM OpenTelemetryModule - onApplicationShutdown', signal);
// //     }

// //     static forRoot(options?: OpenTelemetryOptions): DynamicModule {
// //         return {
// //             module: OpenTelemetryModule,
// //             providers: [OpenTelemetryTracer, { provide: OpenTelemetryOptions, useValue: options }],
// //         };
// //     }
// // }
