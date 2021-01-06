import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Podcast } from './entities/podcast.entity';
import {
  CreatePodcastDto,
  CreatePodcastsOutputDto,
} from './dtos/create-podcast.dto';
import { PodcastsService } from './podcasts.service';
import {
  getPodcastAllOutputDto,
  getPodcastInputDto,
  getPodcastOutputDto,
} from './dtos/get-podcast.dto';
import { deleteOutputDto, updateOutputDto } from 'src/common/dtos/output.dto';
import {
  UpdatePodcastDto,
  UpdatePodcastInputDto,
} from './dtos/update-podcast.dto';
import {
  getEpisodeAllOutputDto,
  getEpisodeInputDto,
} from './dtos/get-episode.dto';

@Resolver(() => Podcast)
export class PodcastsResolver {
  constructor(private readonly podcastsService: PodcastsService) {}

  @Query(() => getPodcastAllOutputDto)
  podcasts(): getPodcastAllOutputDto {
    return this.podcastsService.getAllPodcasts();
  }

  @Mutation(() => CreatePodcastsOutputDto)
  createPodcasts(
    @Args('input') createPodcastsInput: CreatePodcastDto,
  ): CreatePodcastsOutputDto {
    return this.podcastsService.createPodcast(createPodcastsInput);
  }

  @Query(() => getPodcastOutputDto)
  getPodcast(@Args() getPodcastInput: getPodcastInputDto) {
    return this.podcastsService.getPodcast(getPodcastInput.id);
  }

  @Mutation(() => deleteOutputDto)
  deletePodcast(@Args() getPodcastInput: getPodcastInputDto): deleteOutputDto {
    return this.podcastsService.deletePodcast(getPodcastInput.id);
  }

  @Mutation(() => updateOutputDto)
  updatePodcast(
    @Args('input') updatePodcastInput: UpdatePodcastInputDto,
  ): updateOutputDto {
    return this.podcastsService.updatePodcast(
      updatePodcastInput.id,
      updatePodcastInput.updatePodcastDto,
    );
  }

  /*
  @Query(() => getEpisodeAllOutputDto)
  getEpisodes(
    @Args() getEpisodeInput: getEpisodeInputDto,
  ): getEpisodeAllOutputDto {
    return this.podcastsService.getEpisodes(getEpisodeInput.podcastId);
  }
  */
}
