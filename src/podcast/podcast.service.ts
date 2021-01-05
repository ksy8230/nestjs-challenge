import { Injectable, NotFoundException } from '@nestjs/common';
import { Episode } from './entities/Episode.entities';
import { Podcast } from './entities/podcast.entities';

@Injectable()
export class PodcastService {
  private podcasts: Podcast[] = [];

  getAll(): Podcast[] {
    return this.podcasts;
  }

  getOne(id: string): Podcast {
    const podcast = this.podcasts.find((v) => v.id === +id);
    if (!podcast) {
      throw new NotFoundException(`podcast with ID ${id} not found.`);
    }
    return podcast;
  }

  getEpisodesById(id: string): Episode[] {
    const episodes = this.getOne(id).episodes;
    if (!episodes) {
      throw new NotFoundException(`episodes with podcast ID ${id} not found.`);
    }
    return episodes;
  }

  create(data) {
    this.podcasts.push({
      id: this.podcasts.length + 1,
      ...data,
    });
  }

  createEpisode(id: string, data) {
    const podcast = this.getOne(id);
    const existEpisode = this.getEpisodesById(id);
    const newEpisode = data;
    podcast.episodes.push({ id: existEpisode.length + 1, ...newEpisode });
  }

  deleteOne(id: string) {
    this.getOne(id);
    this.podcasts = this.podcasts.filter((v) => v.id !== +id);
  }

  deleteEpisode(id: string, episodeId: string) {
    const podcast = this.getOne(id);
    const thisEpisodes = this.getEpisodesById(id);
    podcast.episodes = thisEpisodes.filter((v) => v.id !== +episodeId);
  }

  update(id: string, data) {
    const podcast = this.getOne(id);
    this.deleteOne(id);
    this.podcasts.push({ ...podcast, ...data });
  }

  updateEpisode(id: string, episodeId: string, data) {
    const podcast = this.getOne(id);
    const episode = podcast.episodes.find((v) => v.id === +episodeId);
    this.deleteEpisode(id, episodeId);
    podcast.episodes.push({ ...episode, ...data });
  }
}
