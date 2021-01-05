import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Episode } from './entities/Episode.entities';
import { Podcast } from './entities/podcast.entities';
import { PodcastService } from './podcast.service';

@Controller('podcast')
export class PodcastController {
  constructor(private readonly podcastService: PodcastService) {}

  @Get()
  getAll(): Podcast[] {
    return this.podcastService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: string): Podcast {
    return this.podcastService.getOne(id);
  }

  @Get('/:id/episodes')
  getEpisodesById(@Param('id') id: string): Episode[] {
    return this.podcastService.getEpisodesById(id);
  }

  @Post()
  create(@Body() data) {
    return this.podcastService.create(data);
  }

  @Post('/:id/episodes')
  createEpisode(@Param('id') id: string, @Body() data) {
    return this.podcastService.createEpisode(id, data);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.podcastService.deleteOne(id);
  }

  @Delete('/:id/episodes/:episodeId')
  deleteEpisode(
    @Param('id') id: string,
    @Param('episodeId') episodeId: string,
  ) {
    return this.podcastService.deleteEpisode(id, episodeId);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() data) {
    return this.podcastService.update(id, data);
  }

  @Patch('/:id/episodes/:episodeId')
  updateEpisode(
    @Param('id') id: string,
    @Param('episodeId') episodeId: string,
    @Body() data,
  ) {
    return this.podcastService.updateEpisode(id, episodeId, data);
  }
}
