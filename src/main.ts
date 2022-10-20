import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { BaseInterceptor } from './common/exception.intercept';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new BaseInterceptor());

  app.enableVersioning({
    defaultVersion: "1.0",
    type: VersioningType.URI,
  });

  const document = new DocumentBuilder()
    .setTitle("Nest Demo")
    .setDescription("This is a demo project ")
    .setVersion("1.0")
    .build();

  const writerDescriptorDocument = SwaggerModule.createDocument(app, document);
  SwaggerModule.setup("api/student", app, writerDescriptorDocument);
  await app.listen(3001);
}
bootstrap();
