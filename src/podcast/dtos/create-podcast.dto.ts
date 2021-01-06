import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class CreatePodcastDto {
  @Field(() => String)
  readonly title: string;

  @Field(() => String)
  readonly category: string;
}

@ObjectType()
export class CreatePodcastsOutputDto {
  @Field(() => Number)
  id: number;

  @Field(() => String, { nullable: true })
  err?: string;
}
