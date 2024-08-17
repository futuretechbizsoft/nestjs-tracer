import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { trace, context } from '@opentelemetry/api';

@Injectable()
export class TracingMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        // Create a new span for the incoming request
        const tracer = trace.getTracer('my-service');
        const parentSpan = tracer.startSpan(`http-request-${req.method}-${req.url}`);

        // Set the parent span in the context
        context.with(trace.setSpan(context.active(), parentSpan), () => {
            // Call next() to proceed with the request
            next();

            // End the parent span when the response is finished
            res.on('finish', () => {
                parentSpan.setAttribute('http.status_code', res.statusCode);
                parentSpan.end();
            });
        });
    }
}
