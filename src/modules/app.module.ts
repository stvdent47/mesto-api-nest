import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from '../controllers/app.controller';
import { CatsController } from '../controllers/cats.contoller';
import { AppService } from '../services/app.service';
import { CatsService } from 'src/services/cats.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
