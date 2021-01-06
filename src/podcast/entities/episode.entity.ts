import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class Episode {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  category: string;

  @Field(() => Int)
  rating: number;
}
