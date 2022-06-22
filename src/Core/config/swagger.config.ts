/* eslint-disable prettier/prettier */
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger/dist';

export function SwaggerInit(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('NestJS')
    .setDescription('API Documentation for NestJS Test App')
    .setVersion(process.env.version)
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);
}
