import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
// import { OpenTelemetryModule } from '../../../libs/shared/src/openTelemetry/open-telemetry.module';
import { HttpContextMiddleware } from '../../../libs/shared/src/context/context';
// import { TracingMiddleware } from '../../../libs/shared/src/openTelemetry/tracing.middleware';

import { AppController } from './app.controller';

@Module({
    controllers: [AppController],
    imports: [
        // OpenTelemetryModule.forRoot({
        //     // otlpEndpoint: 'http://localhost:4318/v1/traces',
        //     zipkinEndpoint: 'http://localhost:9411/api/v2/spans',
        //     serviceName: 'my-service-ld',
        // }),
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(HttpContextMiddleware).forRoutes('*');
    }
}

// import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
// import { OpenTelemetryModule } from '../../../libs/shared/src/openTelemetry/open-telemetry.module';
// import { HttpContextMiddleware } from '../../../libs/shared/src/context/context';

// import { AppController } from './app.controller';

// @Module({
//     controllers: [AppController],
//     imports: [OpenTelemetryModule.forRoot()],
// })
// export class AppModule implements NestModule {
//     configure(consumer: MiddlewareConsumer) {
//         consumer.apply(HttpContextMiddleware).forRoutes('*');
//     }
// }
