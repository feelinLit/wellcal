import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as expressHbs from 'express-handlebars';
import * as hbs from 'hbs';
import { join } from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle('welcal')
    .setDescription('The welcal API description')
    .setVersion('1.0')
    .addTag('welcal')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/swagger', app, document, {});

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
