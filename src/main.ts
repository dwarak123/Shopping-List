import { AzureHttpRouter } from '@nestjs/azure-func-http';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new AzureHttpRouter());
   app.useGlobalPipes(new ValidationPipe());
   const config = new DocumentBuilder()
   .setTitle('My Title')
   .setDescription('My Description')
   .setVersion('1.0')
   .setBasePath('api-docs')
   .build();
   
   const document = SwaggerModule.createDocument(app, config);
   
   SwaggerModule.setup('api-docs', app, document, {
     useGlobalPrefix: true,
   });
   
   // order matters here. 
   app.init() 
   // port that is used for swagger ui. Sync with Az Fx. 
   app.listen(3000)
}
bootstrap();
