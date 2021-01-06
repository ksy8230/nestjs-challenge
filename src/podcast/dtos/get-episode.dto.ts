import { ArgsType, Field, InputType, ObjectType } from '@nestjs/graphql';
import { Episode } from '../entities/episode.entity';
import { Podcast } from '../entities/podcast.entity';

@InputType()
export class getEpisodeAllOutputDto {
  @Field(() => [Episode])
  episodes: Episode[];

  @Field(() => String, { nullable: true })
  err?: string;
}

@InputType()
export class getEpisodeInputDto {
  @Field(() => String)
  podcastId: string;
}

@ObjectType()
export class getPodcastOutputDto {
  @Field(() => Episode, { nullable: true })
  episodes?: Episode;

  @Field(() => String, { nullable: true })
  err?: string;
}
