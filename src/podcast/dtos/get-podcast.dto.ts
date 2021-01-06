import { ArgsType, Field, InputType, ObjectType } from '@nestjs/graphql';
import { Podcast } from '../entities/podcast.entity';

@ObjectType()
export class getPodcastAllOutputDto {
  @Field(() => [Podcast])
  podcasts: Podcast[];

  @Field(() => String, { nullable: true })
  err?: string;
}

@ArgsType()
export class getPodcastInputDto {
  @Field(() => String)
  id: string;
}

@ObjectType()
export class getPodcastOutputDto {
  @Field(() => Podcast, { nullable: true })
  podcast?: Podcast;

  @Field(() => String, { nullable: true })
  err?: string;
}
