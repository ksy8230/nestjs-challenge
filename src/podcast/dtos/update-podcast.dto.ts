import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Episode } from '../entities/episode.entity';

@InputType()
export class UpdatePodcastDto {
  @Field(() => String, { nullable: true })
  readonly title?: string;

  @Field(() => String, { nullable: true })
  readonly category?: string;

  @Field(() => Int, { nullable: true })
  readonly rating?: number;

  @Field(() => [Episode], { nullable: true })
  readonly episodes?: Episode[];
}

@InputType()
export class UpdatePodcastInputDto {
  @Field(() => String)
  id: string;

  @Field(() => UpdatePodcastDto)
  updatePodcastDto: UpdatePodcastDto;
}
