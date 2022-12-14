import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';
import { AppModule } from './app.module';
import { svelteTemplateEngine } from './svelte-template-engine';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.engine('svelte', svelteTemplateEngine);
  app.setViewEngine('svelte');
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  await app.listen(4000);
  Logger.log(`server listening: ${await app.getUrl()}`);
}
bootstrap();
