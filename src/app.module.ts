import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PodcastController } from './podcast/podcast.controller';
import { PodcastService } from './podcast/podcast.service';

@Module({
  imports: [],
  controllers: [AppController, PodcastController],
  providers: [AppService, PodcastService],
})
export class AppModule {}
