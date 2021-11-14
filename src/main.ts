import { NestFactory } from '@nestjs/core';
import {
  NestFastifyApplication,
  FastifyAdapter,
} from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const config = new DocumentBuilder()
    .setTitle('NFT Api')
    .setDescription('The best NFT API in the whole world')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();

  const PORT = process.env.PORT || 3000;
  const HOST = process.env.HOST || '::';
  app.listen(PORT, HOST, (err) => {
    if (err) throw err;
    console.log(`Server listening on ${PORT} and the host is ${HOST}`);
  });
}
bootstrap();
