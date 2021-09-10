import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

const { PORT = 3001 } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);

  console.log(`> the server is now listening on the port: ${PORT}`);
  console.log(`> http://localhost:${PORT}/`);
}
bootstrap();
