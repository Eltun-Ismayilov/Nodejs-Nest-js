import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerInit } from './Core/config/swagger.config';
import { ValidationPipe, VersioningType } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.enableVersioning({
    type: VersioningType.URI, // burda ise biz localhost:3000/api/vN olacaq (n=1,2,...n ola biler)
  });
  app.setGlobalPrefix('/api/');
  SwaggerInit(app);
  await app.listen(3000);
}
bootstrap();
