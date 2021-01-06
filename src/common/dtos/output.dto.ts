import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';

@ObjectType()
export class CoreOutput {
  @Field(() => String, { nullable: true })
  err?: string;
}

@ObjectType()
export class deleteOutputDto extends CoreOutput {}

@ObjectType()
export class updateOutputDto extends CoreOutput {}
