import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class NewPasswordDto {
  @Field()
  newPassword: string;
  @Field()
  confirmNewPassword: string;
}

@InputType()
export class ForgetPasswordDto extends NewPasswordDto {
  @Field()
  username: string;
}

@InputType()
export class ChangePasswordDto extends NewPasswordDto {
  @Field()
  oldPassword: string;
}
