import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { svelteTemplateEngine } from './svelte-template-engine';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.engine('svelte', svelteTemplateEngine);
  app.setViewEngine('svelte');
  await app.listen(4000);
  Logger.log(`server listening: ${await app.getUrl()}`);
}
bootstrap();
