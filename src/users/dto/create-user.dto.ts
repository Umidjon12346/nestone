import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({
    example: "User1",
    description: "user ismi",
  })
  name: string;

  @ApiProperty({
    example: "user1@gmail.uc",
    description: "user emaili",
  })
  email: string;

  @ApiProperty({
    example: "Umid22",
    description: "user parolini kirit",
  })
  password: string;

  @ApiProperty({
    example: "user",
    description: "user roli",
  })
  value: string;
}
