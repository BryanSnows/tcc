import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerService } from './config/swagger/swagger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.setGlobalPrefix('/v1');


  new SwaggerService().init(app);
  await app.listen(process.env.APP_PORT);
  console.log(process.env.APP_PORT)
}
bootstrap();
