import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as expressHbs from 'express-handlebars';
import * as hbs from 'hbs';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets('public');
  app.setBaseViewsDir('views');
  app.setViewEngine('hbs');

  app.engine(
    'hbs',
    expressHbs.engine({
      layoutsDir: 'views/layouts',
      defaultLayout: 'layout_main',
      extname: 'hbs',
    }),
  );

  hbs.registerPartials(join('views', 'partials'));

  await app.listen(process.env.port || 3000);
}
bootstrap();
