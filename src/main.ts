import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as expressHbs from 'express-handlebars';
import * as hbs from 'hbs';
import { join } from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {
  calculateCalories,
  getCurrentTime,
  getTime,
  showHumanDate,
} from './hbs/helpers';
import supertokens from 'supertokens-node';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle('wellcal')
    .setDescription('The wellcal API description')
    .setVersion('1.0')
    .addTag('wellcal')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/swagger', app, document, {});

  app.useStaticAssets(join(__dirname, '..', '../public'));
  app.setBaseViewsDir(join(__dirname, '..', '../views'));
  app.setViewEngine('hbs');

  app.engine(
    'hbs',
    expressHbs.engine({
      layoutsDir: join(__dirname, '..', '../views', 'layouts'),
      partialsDir: join(__dirname, '..', '../views', 'partials'),
      defaultLayout: 'layout_main',
      extname: 'hbs',
      helpers: { calculateCalories, getTime, showHumanDate, getCurrentTime },
    }),
  );

  hbs.registerPartials(join('../views', 'partials'));

  // SuperTokens.init({
  //   appInfo: {
  //     apiDomain: 'http://localhost:3000',
  //     apiBasePath: '/api/auth',
  //     appName: 'wellcal',
  //   },
  //   recipeList: [Session.init(), ThirdParty.init()],
  // });

  app.enableCors({
    origin: ['http://localhost:3000'],
    allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
    credentials: true,
  });

  await app.listen(process.env.port || 3000);
}
bootstrap();
