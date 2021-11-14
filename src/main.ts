import { NestFactory } from '@nestjs/core';
import {
  NestFastifyApplication,
  FastifyAdapter,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.enableCors();

  const PORT = process.env.PORT || 3000;
  const HOST = process.env.HOST || '::';
  app.listen(PORT, HOST, (err) => {
    if (err) throw err;
    console.log(`Server listening on ${PORT} and the host is ${HOST}`);
  });
}
bootstrap();
