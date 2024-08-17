import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import init from '../../../libs/shared/src/openTelemetry/trace';
// import { PrometheusMetrics } from '../../../libs/shared/src/monitoring/prometheus.metrics';
import tracer from '../../../libs/shared/src/openTelemetry/tracer';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // const xyz = init('lina', 'dhgarmesh');
    // xyz.start();
    await tracer.start();

    app.enableShutdownHooks();

    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);

    // PrometheusMetrics.registerMetricsEndpoint(app);

    await app.listen(3044);

    // Log the server startup information
    console.info(`server running on port 3044`);
}
bootstrap();
