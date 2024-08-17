import { Controller, Get } from '@nestjs/common'; // VERSION_NEUTRAL HttpException
// import { trace } from '@opentelemetry/api';

@Controller() // Decorates the class as a NestJS controller
export class AppController {
    constructor() {}

    @Get('/health') // Route to handle GET requests at /health
    // @PublicRoute()
    public async getHealth(): Promise<string> {
        console.log('HEll001-1');
        // throw new HttpException('Forbidden', 403);
        return 'Yes this is health';
    }

    // @Get('/test-trace')
    // async testTrace(): Promise<string> {
    //     const tracer = trace.getTracer('my-service');
    //     const span = tracer.startSpan('test-span');

    //     // Simulate work
    //     await new Promise((resolve) => setTimeout(resolve, 100));

    //     span.end();
    //     return 'Trace test complete';
    // }
}
